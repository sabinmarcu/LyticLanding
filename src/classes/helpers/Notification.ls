const DRIVERS = [\normal \webkit \moz]; Drivers = new IS.Enum DRIVERS

class NotificationHelper extends IS.Object
	~> 
		Runtime.init 'toast-driver', \number
		Runtime.init 'toast-timeout', \number

		timeout <~ DBStorage.get "toast-timeout"
		timeout ?= 5000

		Runtime.set 'toast-timeout', timeout
		Runtime.set 'toast-driver',	Drivers[\normal]
		#if Tester[\webkitNotifications]
			#unless Tester[\chrome.storage]
				#handler = ->
					#webkitNotifications.requestPermission()
					#window.removeEventListener "click"
				#window.addEventListener "click", handler
			#Runtime.set 'toast-driver', Drivers[\webkit]
		#else if Tester[\mozNotifications]
			#handler = ->
				#Notification.requestPermission()
				#window.removeEventListener "click"
			#window.addEventListener "click", handler
			#Runtime.set 'toast-driver', Drivers[\moz]
		Runtime.subscribe \prop-modal-state-change, ~>
			switch Runtime.get \modal-state
			| 1 => $ \.app .addClass \modal-active
			| 0 => $ \.app .removeClass \modal-active
		@echo "Notification Helper Online, with driver : ", @drive, " and timeout : ", Runtime.get('toast-timeout')

	toast: (title = "Notification", ...body)~> switch Runtime.get('toast-driver')
	| Drivers.webkit => 
		if webkitNotifications.checkPermission() is 0 
			@toast-webkit title, body 
		else @toast-normal title, body
	| Drivers.moz =>
		if Notification.permission is "granted"
			@toast-moz title, body
		else @toast-normal title, body
	| otherwise => @toast-normal title, body
	toast-moz: (title, body) ~> 
		notif = new Notification title, body: body * \\n, icon: 'icon.ico'
		setTimeout (-> notif.close()), Runtime.get 'toast-timeout'
	toast-webkit: (title, body)~>
		notif = webkitNotifications.createNotification 'icon.ico', title, body  * \\n
		notif.ondisplay = (ev) -> setTimeout (-> ev.currentTarget.cancel()), Runtime.get 'toast-timeout'
		notif.show!
	toast-normal: (title, body) ~>
		b = ""
		if Modal? 
			for item in body then b += "<p>#item</p>"
			Modal.show title: title, content: b, Runtime.get 'toast-timeout'
		else 
			b = ( [title] ++ body ) * "\n"
			alert b

Helper = new NotificationHelper()
Toast = Helper.toast
module.exports = [ Helper, Toast ]
