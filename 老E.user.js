// ==UserScript==
// @name         老E直播间
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.huya.com/edmunddzhang
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let body = $("body")
    /**
     * 添加style到head
     * @param css css内容
     * @param name style标识
     */
    let addCss = (css, name) => {
        let style = body.find("style[name='" + name + "']:first")
        if (style.length === 0)
            style = $("<style\>")
        style.text(style.text() + "\n" + css)
        style.attr("name", name)
        body.append(style)
    }

    //其他直播广告移除
    let blockList = [];
    blockList.push(
        $(".room-footer"),
        $(".mod-sidebar"),
        $(".duya-header"),
    )
    addCss(`
    .disabled,
    #week-star-btn,
    .player-recommend-list,
    .player-recommend-home,
    #player-marquee-wrap {
      display: none !important;
      pointer-events: none !important;
    }
    .main-wrap,
    .main-room {
      padding: 0 !important;
    }
    .room-hd .host-info {
      display: flex;
      align-items: center;
      margin-left: 16px;
    }
    .J_roomHdDetail {
      position: unset;
    }
    .room-hd-l {
      display: flex;
      padding: 8px 16px;
    }
    #avatar-img {
      height: 48px;
      width: 48px;
      margin-top: 0;
    }
    .room-hd .host-pic {
      height: 48px;
      width: 48px;
      float: unset;
    }
    .room-hd .host-info .host-title {
      padding: 0;
    }
    .room-hd {
      height: auto;
    }
    .room-hd .host-info .host-detail {
      position: relative;
      top: 0;
      margin-left: 16px;
    }
    #J_roomHeader {
      display: flex;
      width: 73.5vw;
    }
    .room-hd .room-hd-r {
      position: relative;
      height: unset;
      display: flex;
      align-items: center;
      padding-right: 16px;
    }
    .flex-white {
      flex: 1 0 auto;
    }
    .room-hd .host-control {
      padding: 0;
    }
    .room-hd .host-control .subscribe-entrance {
      display: flex;
      width: unset;
    }
    .room-hd .host-control .subscribe-control {
       border-radius: 2px 0 0 2px;
       padding: 2px 4px;
    }
    .room-hd .host-control .subscribe-count.subscribe-count-ed {
       border-radius: 0 2px 2px 0;
       padding: 2px 4px;
    }
    .host-prevStartTime {
      display: inline-block !important;
      margin-left: 16px;
    }
    .room-hd .host-control .subscribe-expand {
      top: 44px;
      right: 87px;
    }
    .room-core {
      display: flex;
    }
    .room-core .room-core-l {
      margin: 0;
    }
    .room-core .room-core-r {
      position: unset;
      width: 100%;
      height: auto;
    }
    #J_weekRankBox,
    .jspContainer,
    .jspPane,
    #watchChat_pub {
      width: 100% !important;
      margin: 0;
    }
    #player-recommend .player-recommend-bg {
      filter: blur(32px);
    }`, "Main");
    $(".room-hd-l").after($("<div class='flex-white'></div>"))
    //聊天部分
    //进直播间提示
    blockList.push(
        $("#J_box_msgOfKing"),
        $(".host-channel"),
        $(".host-rid"),
        $(".host-control-other"),
        $("#J_roomNotice")
    )
    addCss(`
    .chat-room__list .msg-nobleSpeak {
      background-color: transparent;
    }
    .chat-room__list .msg-nobleSpeak:after {
      display: none;
    }
    .chat-room__list .msg-nobleSpeak-decorationSuffix {
      display: none !important;
      pointer-events: none !important;
    }
    `, "Chat");
    blockList.forEach((e) => {
        e.addClass("disabled")
    })


    addCss(`
    .egg {
      font-family: sans-serif;
      display: flex;
      position: absolute;
      top: 93.2vh;
      width: 100%;
      text-align: center;
      align-items: center;
      color: red;
      font-size: 16px;
      justify-content: center;
    }`, "CaiDan")
    let egg = $("<div\>")
    egg.addClass("egg")
    egg.append($("<span>你瞎跑什么唉</span>"))
    body.append(egg)
})();