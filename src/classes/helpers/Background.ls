class BackgroundHelper extends IS.Object
    ~> @set = 0; @timer = setInterval @change, 3666; @change!; @log "Started doing Background Changes"; @change!
    change: ~>
        @log "Changing"
        if @set % 2 is 0 then $ \.app .css "background", '#fff'
        else $ \.app .css "background", '#666'
        @set += 1;

module.exports = new BackgroundHelper
