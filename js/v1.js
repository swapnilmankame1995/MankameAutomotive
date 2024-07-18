"use strict";
! function(e) {
  function n() {
    for (var e = 0; e < b.length; e++) {
      var n = document.createElement("div");
      n.innerHTML = b[e], n = n.firstChild, document.body.appendChild(n)
    }
  }

  function s(e, n) {
    for (var s = document.body.getElementsByClassName(e), a = 0; a < s.length; a++) return s[a].className = n
  }

  function a(e, n, s) {
    for (var a = document.body.getElementsByClassName(e), t = 0; t < a.length; t++) a[t].style[n] = s
  }

  function t(e, n) {
    a(h.SHARE_MODAL_CONTAINER, e, n), a(h.WIDGET, e, n), a(h.BACKDROP, e, n)
  }

  function r(e, n) {
    for (var s = document.body.getElementsByClassName(e), a = 0; a < s.length; a++) s[a].innerHTML = n
  }

  function o(e, n, s) {
    for (var a = document.body.getElementsByClassName(e), t = 0; t < a.length; t++) return a[t][n] = s
  }

  function c(e) {
    return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null
  }

  function i(e) {
    var n = c(e);
    return n || (n ? void 0 : null)
  }

  function l() {
    for (var e, n = 0, s = document.body.getElementsByTagName("*"), a = {}, t = 0; t < s.length; t++) e = getComputedStyle(s[t]).zIndex, e > n && (n = e), (n = "auto") && (n = U.OVERRIDE);
    return a.primary = n + U.PRIMARY, a.secondary = n + U.SECONDARY, a.tertiary = n + U.TERTIARY, a
  }

  function g() {
    var e = l();
    a(h.SHARE_MODAL_CONTAINER, "z-index", e.primary), a(h.WIDGET, "z-index", e.primary), a(h.BACKDROP, "z-index", e.secondary)
  }

  function d(e, n, s) {
    var a = "";
    if (s) {
      var t = new Date;
      t.setTime(t.getTime() + 24 * s * 60 * 60 * 1e3), a = "; expires=" + t.toUTCString()
    }
    document.cookie = e + "=" + n + a + "; path=/"
  }

  function E(e, n, s) {
    e && d(F.CAMPAIGN, e, 365), n && d(F.CONTACT, n, 365), s && d(F.ERROR, s, 1)
  }

  function C(e) {
    for (var e = e + "=", n = decodeURIComponent(document.cookie), s = n.split(";"), a = 0; a < s.length; a++) {
      for (var t = s[a];
        " " == t.charAt(0);) t = t.substring(1);
      if (0 == t.indexOf(e)) return t.substring(e.length, t.length)
    }
    return null
  }

  function f(e) {
    var n = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      },
      s = new Date(1e3 * e);
    return s = s.toLocaleDateString("en-US", n)
  }

  function R(e) {
    var n = document.createElement("style");
    n.type = "text/css", n.innerHTML = e, document.body.appendChild(n)
  }

  function p(e, n, s, r) {
    var o = !(!D.campaign || !D.contact);
    if (n == P.LEADER_BOARD && a(h.CONVERSION_COUNT, "display", "none"), n == P.CONVERSION_COUNT && a(h.LEADER_BOARD, "display", "none"), e !== B.COMPLETE && e !== B.DELETED || (a(h.ACTIONS_CONTAINER, "display", "none"), a(h.REFER_CTA, "display", "none"), a(h.WIDGET, "display", "none"), a(h.SIGNUP_CONTAINER, "display", "none"), a(h.CAMPAIGN_STATUS_COMPLETE, "display", "block")), e === B.IN_PROGRESS && (a(h.CAMPAIGN_STATUS_COMPLETE, "display", "none"), a(h.POSITION, "display", "none"), a(h.ACTIONS_CONTAINER, "display", "none"), a(h.LEADER_BOARD_TABLE, "display", "none"), a(h.CONVERSIONS_PROGRESS, "display", "none"), a(h.SIGNUP_CONTAINER, "display", "block"), a(h.REWARD, "display", "block"), a(h.SITE_URL, "display", "block"), n == P.LEADER_BOARD && (a(h.WINNERS_DESCRIPTION_LEADER_BOARD, "display", "block"), a(h.WINNERS_DESCRIPTION_CONVERSION_COUNT, "display", "none")), n == P.CONVERSION_COUNT && (a(h.WINNERS_DESCRIPTION_CONVERSION_COUNT, "display", "block"), a(h.WINNERS_DESCRIPTION_LEADER_BOARD, "display", "none")), (s || o) && function() {
        a(h.SIGNUP_CONTAINER, "display", "none"), a(h.POSITION, "display", "block"), a(h.ACTIONS_CONTAINER, "display", "block"), n == P.LEADER_BOARD && (a(h.CONVERSION_COUNT, "display", "none"), a(h.LEADER_BOARD, "display", "block")), n == P.CONVERSION_COUNT && (a(h.LEADER_BOARD, "display", "none"), a(h.CONVERSION_COUNT, "display", "block"))
      }()), e !== B.DRAFT && e !== B.PENDING && e !== B.CANCELLED || (console.log("GrowSurf modal is not showing because the campaign is " + e), console.log("Please contact team@growsurf.com for help!"), a(h.CAMPAIGN_STATUS_COMPLETE, "display", "none"), t("display", "none")), r)
      for (var c = [h.POSITION, h.SITE_URL, h.ACTIONS_CONTAINER, h.SIGNUP_CONTAINER, h.CONVERSION_COUNT, h.LEADER_BOARD, h.REWARD, h.WINNERS_DESCRIPTION_LEADER_BOARD, h.WINNERS_DESCRIPTION_CONVERSION_COUNT], i = 0; i < c.length; i++) a(c[i], "display", "none")
  }

  function u(e, n, s) {
    for (var a = document.body.getElementsByClassName(e), t = 0; t < a.length; t++) {
      var r = a[t].insertRow(-1),
        o = r.insertCell(0),
        c = r.insertCell(1),
        i = r.insertCell(2);
      n.name = Z.ANONYMOUS, o.innerHTML = n.rank, c.innerHTML = n.name, i.innerHTML = n.referralCount;
      var l = ' <span class="winner-tag">winning</span>';
      n.winning && (c.innerHTML = n.name + l), s && n.id === s && (c.innerHTML = n.name + " <small>this is you!</small>", n.winning && (c.innerHTML = n.name + l + " <small>this is you!</small>"))
    }
  }

  function A(e) {
    for (var n = 0; n < e.length; n++) u(h.LEADER_BOARD_TABLE_BODY, e[n], D.contact)
  }

  function m(e) {
    for (var n = document.body.getElementsByClassName(h.REFERRAL_STAMPS_CONTAINER), s = 0; s < n.length; s++) n[s].innerHTML += e
  }

  function O(e) {
    var n = e.data.campaign,
      s = e.data.contacts,
      t = e.data.contact,
      c = "";
    e.data.campaign && function() {
      n.showStatusWidget && D.campaign && D.contact && a(h.WIDGET, "display", "block"), r(h.REWARD, n.reward), r(h.CONTACT_COUNT, n.contactCount), r(h.SITE_URL, n.siteUrl.replace(/^https?:\/\//, "")), r(h.NUMBER_OF_WINNERS, n.numberOfWinners), r(h.END_DATE, f(n.endDateTime)), r(h.CONVERSIONS_REQUIRED, n.conversionsRequired), L(n.urlId), c = n.siteUrl
    }(), e.data.contact && function() {
      r(h.REFERRAL_STAMPS_CONTAINER, "");
      var e = n.conversionsRequired - t.referralCount;
      r(h.YOUR_RANK, t.rank), r(h.CONTACT_REFERRALS, t.referralCount), r(h.CONTACT_REFERRALS_NEEDED, e);
      for (var s = 0; s < t.referralCount; s++) m(M.FILLED);
      for (var s = 0; s < e; s++) m(M.EMPTY);
      t.referralCount <= 0 && a(h.FILLED_REFERRAL_STAMP, "display", "none"), t.referralCount >= n.conversionsRequired && (a(h.EMPTY_REFERRAL_STAMP, "display", "none"), a(h.REFER_CTA, "display", "none"));
      var o = K.OFFSET + 1;
      n.contactCount < o && a(h.LOAD_MORE_CONTACTS_BUTTON, "display", "none"), e <= 1 && a(h.PLURAL_S, "display", "none"), e <= t.referralCount && (a(h.PLURAL_S, "display", "inline"), r(h.CONTACT_CONVERSION_COUNT, "You have " + t.referralCount + " referrals!")), c = n.siteUrl + "?" + G.REFERRER_ID + "=" + t.id
    }(), e.data.contacts && function() {
      if (r(h.LEADER_BOARD_TABLE_BODY, ""), n.contactCount >= k)
        for (var e = 0; e < s.length; e++) u(h.LEADER_BOARD_TABLE_BODY, s[e], D.contact);
      n.contactCount < k && a(h.LEADER_BOARD_TABLE, "display", "none")
    }();
    var i = V.EMAIL.BASE + V.EMAIL.BODY + "Hey%20friend,%0A%0AYou may want to check this out! :)%0A%0A" + n.reward + ".%0A%0AYou can sign up by using my unique link here: " + c,
      l = V.FACEBOOK.BASE + c + V.FACEBOOK.TITLE + n.reward,
      g = V.TWITTER.BASE + n.reward + "%0A%0A" + c,
      d = V.PINTEREST.BASE + c + V.PINTEREST.DESCRIPTION + n.reward;
    o(h.SHARE_URL, "value", c), o(h.EMAIL_SHARE, "href", i), o(h.FACEBOOK_SHARE, "href", l), o(h.TWITTER_SHARE, "href", g), o(h.PINTEREST_SHARE, "href", d)
  }

  function T() {
    var e = y,
      n = document.querySelectorAll("[" + e + "]");
    if (n.length > 0) return n[0].attributes[e].nodeValue
  }

  function N() {
    var e = document.createElement("style");
    e.appendChild(document.createTextNode(".grsf, .grsf-backdrop, .grsf-widget { display: none }")), document.getElementsByTagName("head")[0].appendChild(e), document.head.appendChild(e);
    var n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", Y), document.getElementsByTagName("head")[0].appendChild(n)
  }

  function L(e) {
    for (var n = H + e, s = document.body.getElementsByClassName(h.GROWSURF_SIGNUP_FORM), a = 0; a < s.length; a++) return void("FORM" === s[a].tagName && s[a].setAttribute("action", n))
  }

  function S() {
    for (var e, n = 0; n < h.COPY_TO_CLIPBOARD.length; n++)(e = document.querySelector("." + h.COPY_TO_CLIPBOARD[n])) && e.addEventListener("click", function() {
      var e = document.querySelector(".grsf-share-url");
      try {
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
          var n = e.contentEditable,
            s = e.readOnly;
          e.contentEditable = !0, e.readOnly = !0;
          var a = document.createRange();
          a.selectNodeContents(e);
          var t = window.getSelection();
          t.removeAllRanges(), t.addRange(a), e.setSelectionRange(0, 999999), e.contentEditable = n, e.readOnly = s
        } else e.select();
        document.execCommand("copy"), alert(e.value + " copied to clipboard")
      } catch (n) {
        alert("Oops, unable to copy " + e + " to clipboard")
      }
    })
  }

  function _(n) {
    for (var s = document.body.getElementsByClassName(n), a = 0; a < s.length; a++) {
      s[a].addEventListener("click", function() {
        e.close()
      })
    }
  }

  function I(n) {
    for (var s = document.body.getElementsByClassName(n), a = 0; a < s.length; a++) {
      s[a].addEventListener("click", function() {
        e.open()
      })
    }
  }

  function v() {
    for (var e = document.body.getElementsByClassName(h.LOAD_MORE_CONTACTS_BUTTON), n = 0; n < e.length; n++) {
      e[n].addEventListener("click", function() {
        D.campaign && w.getContacts(D.campaign, q)
      })
    }
  }
  var w = {};
  e.parseResponse = {};
  var D = {},
    h = {
      SHARE_MODAL_CONTAINER: "grsf",
      SHARE_MODAL: "grsf-wrapper",
      BACKDROP: "grsf-backdrop",
      WIDGET: "grsf-widget",
      SHARE_MODAL_CLOSE: "grsf-close-wrapper",
      POSITION: "grsf-position",
      LEADER_BOARD: "grsf-ui-state-leader-board",
      CONVERSION_COUNT: "grsf-ui-state-conversion-count",
      WINNERS_DESCRIPTION: "grsf-winners-description",
      WINNERS_DESCRIPTION_LEADER_BOARD: "grsf-winners-description-leader-board",
      WINNERS_DESCRIPTION_CONVERSION_COUNT: "grsf-winners-description-conversion-count",
      SIGNUP_CONTAINER: "grsf-signup-container",
      ACTIONS_CONTAINER: "grsf-actions-container",
      CAMPAIGN_STATUS_COMPLETE: "grsf-campaign-status-complete",
      REFER_CTA: "grsf-refer-cta",
      REWARD: "grsf-reward",
      YOUR_RANK: "grsf-your-rank",
      SITE_URL: "grsf-website",
      CONTACT_COUNT: "grsf-contact-count",
      NUMBER_OF_WINNERS: "grsf-number-of-winners",
      END_DATE: "grsf-campaign-end-date",
      CONVERSIONS_REQUIRED: "grsf-conversions-required",
      CONTACT_REFERRALS: "grsf-contact-referrals",
      CONTACT_REFERRALS_NEEDED: "grsf-contact-referrals-needed",
      CONTACT_CONVERSION_COUNT: "grsf-conversion-count",
      SHARE_URL: "grsf-share-url",
      EMAIL_SHARE: "grsf-email-share-link",
      TWITTER_SHARE: "grsf-twitter-share-link",
      FACEBOOK_SHARE: "grsf-facebook-share-link",
      PINTEREST_SHARE: "grsf-pinterest-share-link",
      CONVERSIONS_PROGRESS: "grsf-conversions-progress",
      LEADER_BOARD_TABLE: "grsf-leaderboard",
      LEADER_BOARD_TABLE_BODY: "grsf-leaderboard-contacts-table-body",
      LOAD_MORE_CONTACTS_BUTTON: "grsf-load-more-contacts-button",
      REFERRAL_STAMPS_CONTAINER: "grsf-contact-referral-stamps-container",
      FILLED_REFERRAL_STAMP: "grsf-referral-stamp-filled",
      EMPTY_REFERRAL_STAMP: "grsf-referral-stamp-empty",
      GROWSURF_SIGNUP_FORM: "grsf-signup-form-container",
      PLURAL_S: "grsf-plural-s",
      SIGNUP: ["signup", "sign-up"],
      COPY_TO_CLIPBOARD: ["grsf-copy-link-button", "grsf-share-url"],
      ANIMATION: {
        ENTER: "grsf-wrapper slide-in-bottom-enter",
        EXIT: "grsf-wrapper slide-out-top-exit"
      }
    },
    y = "grsf",
    b = ['<div class="grsf-widget"><span class="grsf-ui-state-leader-board">You are #<strong class="grsf-your-rank"></strong> of <span class="grsf-contact-count"></span></span><span class="grsf-ui-state-conversion-count"><span class="grsf-conversion-count"><strong class="grsf-contact-referrals-needed"></strong> more referral<span class="grsf-plural-s">s</span> to win!</span></span></div>', '<div class="grsf-backdrop"></div>', '<div class="grsf"><div class="grsf-wrapper"><div class="grsf-position-container"><div class="grsf-position"><span class="grsf-ui-state-leader-board">You are #<strong class="grsf-your-rank"></strong> of <span class="grsf-contact-count"></span></span><span class="grsf-ui-state-conversion-count"><span class="grsf-conversion-count"><strong class="grsf-contact-referrals-needed"></strong> more referral<span class="grsf-plural-s">s</span> to win!</span></span></div></div><div class="grsf-top-bar"><small class="grsf-website"></small><div class="grsf-close-wrapper"><div class="grsf-close-button"></div></div></div><h4 class="grsf-reward"></h4><p class="grsf-winners-description"><span class="grsf-ui-state-leader-board grsf-winners-description-leader-board">Top <span class="grsf-number-of-winners"></span> winners picked on <span class="grsf-campaign-end-date"></span>.</span><span class="grsf-ui-state-conversion-count grsf-winners-description-conversion-count">Refer at least <span class="grsf-conversions-required"></span> friends before <span class="grsf-campaign-end-date"></span> to win.</span></p><div class="grsf-signup-container"><p class="grsf-signup-instructions">Sign up:</p><form class="grsf-signup-form-container" method="post"><input class="grsf-signup-email" type="email" name="email" placeholder="you@email.com" required> <input class="grsf-signup-name" type="name" name="name" placeholder="Gavin Belson"><div class="grsf-signup-button-container"><input class="grsf-signup-button" type="submit" value="Submit"></div></form></div><div class="grsf-campaign-status-complete">This campaign has ended or does not exist.</div><div class="grsf-actions-container"><p class="grsf-actions-instructions">Share your unique referral code:</p><div class="grsf-share-url-container"><input class="grsf-share-url" type="text" readonly="readonly"><div class="grsf-copy-link-button-container"><button class="grsf-copy-link-button">Copy Link</button></div></div><div class="grsf-social-sharing-container"><a class="grsf-social-sharing-item grsf-email-share-link" target="_blank"><svg class="grsf-share-icon" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 17"><path fill="#00050E" fill-rule="evenodd" d="M18.5714507,14.22619 L18.5714507,5.65475125 C18.3370754,5.92260871 18.0803787,6.16814475 17.8013605,6.39135929 C16.2053765,7.61903933 14.5982317,8.86904079 13.0468905,10.1636852 C12.209836,10.866811 11.1718883,11.7261871 10.0111727,11.7261871 L9.98885121,11.7261871 C8.82813554,11.7261871 7.79018788,10.866811 6.95313329,10.1636852 C5.40179217,8.86904079 3.79464738,7.61903933 2.19866333,6.39135929 C1.91964515,6.16814475 1.66294841,5.92260871 1.42857313,5.65475125 L1.42857313,14.22619 C1.42857313,14.4159224 1.59598405,14.5833333 1.78571641,14.5833333 L18.2143074,14.5833333 C18.4040398,14.5833333 18.5714507,14.4159224 18.5714507,14.22619 Z M18.5714507,2.49626533 C18.5714507,2.21724717 18.6384151,1.72617517 18.2143074,1.72617517 L1.78571641,1.72617517 C1.59598405,1.72617517 1.42857313,1.89358608 1.42857313,2.08331842 C1.42857313,3.35564138 2.0647346,4.46055342 3.06920009,5.25296508 C4.56473758,6.42484146 6.06027508,7.60787858 7.54465183,8.79091571 C8.13617042,9.270827 9.20760025,10.297614 9.98885121,10.297614 L10.0111727,10.297614 C10.7924236,10.297614 11.8638534,9.270827 12.455372,8.79091571 C13.9397488,7.60787858 15.4352863,6.42484146 16.9308238,5.25296508 C17.656271,4.68376796 18.5714507,3.44492721 18.5714507,2.49626533 Z M20.0000238,2.08331842 L20.0000238,14.22619 C20.0000238,15.2083341 19.1964515,16.0119065 18.2143074,16.0119065 L1.78571641,16.0119065 C0.803572388,16.0119065 0,15.2083341 0,14.22619 L0,2.08331842 C0,1.1011744 0.803572388,0.297602017 1.78571641,0.297602017 L18.2143074,0.297602017 C19.1964515,0.297602017 20.0000238,1.1011744 20.0000238,2.08331842 Z"/></svg><label>Email</label></a><a class="grsf-social-sharing-item grsf-facebook-share-link" target="_blank"><svg class="grsf-share-icon" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20"><path fill="#3B5998" d="M17.5,0 L2.5,0 C1.12470588,0 0,1.12588235 0,2.5 L0,17.5 C0,18.8764706 1.12470588,20 2.5,20 L10.0870588,20 L10.0870588,12.8282353 L7.69058825,12.8282353 L7.69058825,9.70470587 L10.0870588,9.70470587 L10.0870588,8.14 C10.0870588,5.72705883 11.8670588,3.83764706 14.1411765,3.83764706 L16.3494118,3.83764706 L16.3494118,7.36470587 L14.3741177,7.36470587 C13.857647,7.36470587 13.7047059,7.66117646 13.7047059,8.07176471 L13.7047059,9.70470587 L16.3494118,9.70470587 L16.3494118,12.8282353 L13.7047059,12.8282353 L13.7047059,20 L17.5,20 C18.8764706,20 20,18.8764706 20,17.5 L20,2.5 C20,1.12588235 18.8764706,0 17.5,0 Z"/></svg><label>Share</label></a><a class="grsf-social-sharing-item grsf-twitter-share-link" target="_blank"><svg class="grsf-share-icon" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 17"><path fill="#4099FF" d="M20,1.92333333 C19.2633333,2.24888889 18.4733333,2.47 17.6433333,2.56888889 C18.49,2.06111111 19.14,1.25666667 19.4466667,0.3 C18.6555555,0.77 17.7766667,1.11111111 16.8422222,1.29444445 C16.0933333,0.497777779 15.0266667,0 13.8466667,0 C11.5811111,0 9.74333333,1.83555555 9.74333333,4.10222222 C9.74333333,4.42333333 9.77888887,4.73666667 9.85,5.03777779 C6.43888887,4.86555554 3.41555555,3.23222222 1.39222222,0.751111112 C1.03888889,1.35666667 0.836666667,2.06222222 0.836666667,2.81222222 C0.836666667,4.23666667 1.56111111,5.49222221 2.66222222,6.22777779 C1.99,6.20666667 1.35666667,6.02222221 0.803333333,5.71555554 L0.803333333,5.76666667 C0.803333333,7.75444446 2.21777778,9.41333333 4.09444445,9.79 C3.75,9.88333333 3.38777778,9.93333333 3.01333333,9.93333333 C2.75,9.93333333 2.49222222,9.90888887 2.24222222,9.86 C2.76333333,11.4911111 4.28,12.6766667 6.07444446,12.71 C4.67111113,13.8111111 2.90222222,14.4666667 0.98,14.4666667 C0.647777779,14.4666667 0.322222222,14.4466667 0.00111111111,14.4077778 C1.81666667,15.5722222 3.97333333,16.2511111 6.29111113,16.2511111 C13.8377778,16.2511111 17.9655555,9.99888888 17.9655555,4.57777779 C17.9655555,4.39888887 17.9611111,4.22111113 17.9522222,4.04555555 C18.7533333,3.47 19.45,2.74666667 20,1.92333333 Z"/></svg><label>Tweet</label></a><a class="grsf-social-sharing-item grsf-pinterest-share-link" target="_blank"><svg class="grsf-share-icon" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20"><path fill="#C92228" d="M10,0 C4.4775,0 0,4.4775 0,10 C0,14.11625 2.4878125,17.65125 6.040625,19.18625 C6.015,18.489375 6.04,17.6578125 6.21625,16.904375 C6.4103125,16.090625 7.5090625,11.435625 7.5090625,11.435625 C7.5090625,11.435625 7.188125,10.7940625 7.188125,9.846875 C7.188125,8.36125 8.05125,7.249375 9.1234375,7.249375 C10.0365625,7.249375 10.4778125,7.9365625 10.4778125,8.7575 C10.4778125,9.675 9.8925,11.046875 9.5903125,12.3178125 C9.34,13.3821875 10.12625,14.2515625 11.1759375,14.2515625 C13.0759375,14.2515625 14.3559375,11.809375 14.3559375,8.9146875 C14.3559375,6.71625 12.8765625,5.06875 10.18125,5.06875 C7.138125,5.06875 5.2390625,7.3390625 5.2390625,9.8759375 C5.2390625,10.75 5.4978125,11.3675 5.9025,11.844375 C6.088125,12.0634375 6.113125,12.151875 6.0453125,12.4046875 C5.9965625,12.5884375 5.8884375,13.0328125 5.8421875,13.2103125 C5.775625,13.464375 5.56875,13.5534375 5.339375,13.46 C3.938125,12.88875 3.28375,11.353125 3.28375,9.626875 C3.28375,6.7753125 5.6884375,3.356875 10.4565625,3.356875 C14.2896875,3.356875 16.8109375,6.1303125 16.8109375,9.1053125 C16.8109375,13.044375 14.6215625,15.9846875 11.3959375,15.9846875 C10.311875,15.9846875 9.2921875,15.39875 8.9446875,14.7346875 C8.9446875,14.7346875 8.36,17.0446875 8.2378125,17.4928125 C8.0271875,18.255 7.62125,19.016875 7.2453125,19.616875 C8.119375,19.8659375 9.04375,20 10,20 C15.5225,20 20,15.5225 20,10 C20,4.4775 15.5225,0 10,0 Z"/></svg><label>Pin</label></a></div></div><div class="grsf-leaderboard grsf-ui-state-leader-board"><h5 class="grsf-leaderboard-title">Leaderboard:</h5><div class="grsf-leaderboard-contacts-container"><table><thead><th>Rank</th><th>Name</th><th>Referrals</th></thead><tbody class="grsf-leaderboard-contacts-table-body"></tbody></table><a class="grsf-load-more-contacts-button">Load More</a></div></div><div class="grsf-conversions-progress grsf-ui-state-conversion-count"><h5 class="grsf-conversions-progress-title">Your Progress:</h5><div class="grsf-conversions-progress-referral-card"><h3><span class="grsf-contact-referrals"></span> of <span class="grsf-conversions-required"></span> referrals completed</h3><div class="grsf-contact-referral-stamps-container"></div><p class="grsf-refer-cta">Refer <span class="grsf-contact-referrals-needed"></span> more to win!</p></div></div><a class="grsf-powered-by" href="//growsurf.com/?utm_source=GrowSurf%20User%20Website&utm_medium=JS%20SDK" target="_blank">Referrals powered by&nbsp; <svg class="grsf-logo" xmlns="http://www.w3.org/2000/svg" width="140" viewBox="0 0 140 14"><g fill="none" fill-rule="evenodd" transform="translate(0 -2)"><path class="grsf-logo-text" d="M37.6648649,14.6594595 L37.6648649,8.92972973 L32.8432432,8.92972973 L32.8432432,10.8756757 L35.1351351,10.8756757 L35.1351351,13.4054054 C34.4648649,13.7513514 33.6216216,13.9459459 32.627027,13.9459459 C30.0324324,13.9459459 28.1945946,12.1081081 28.1945946,9.18918919 C28.1945946,6.20540541 30.0756757,4.43243243 32.7783784,4.43243243 C34.7027027,4.43243243 36.0432432,5.12432432 37.1243243,6.03243243 L37.1243243,3.63243243 C36.0432432,2.81081081 34.227027,2.31351351 32.5189189,2.31351351 C28.7351351,2.31351351 25.4486486,4.88648649 25.4486486,9.08108108 C25.4486486,13.2756757 28.6054054,15.9351351 32.3459459,15.9351351 C34.8972973,15.9351351 36.9297297,14.9621622 37.6648649,14.6594595 Z M48.2810811,10.1189189 L52.1297297,15.5675676 L49.2324324,15.5675676 L45.6432432,10.4 L44.0216216,10.4 L44.0216216,15.5675676 L41.3837838,15.5675676 L41.3837838,2.59459459 L46.4864865,2.59459459 C49.5567568,2.59459459 50.8756757,4.41081081 50.8756757,6.50810811 C50.8756757,8.25945946 49.9459459,9.64324324 48.2810811,10.1189189 Z M44.0216216,4.47567568 L44.0216216,8.54054054 L46.0540541,8.54054054 C47.6972973,8.54054054 48.2810811,7.67567568 48.2810811,6.52972973 C48.2810811,5.36216216 47.6972973,4.47567568 46.0540541,4.47567568 L44.0216216,4.47567568 Z M68.2378378,9.08108108 C68.2378378,13.0594595 65.1891892,15.9351351 61.2324324,15.9351351 C57.2540541,15.9351351 54.1621622,13.0594595 54.1621622,9.08108108 C54.1621622,5.1027027 57.2540541,2.22702703 61.2324324,2.22702703 C65.1891892,2.22702703 68.2378378,5.1027027 68.2378378,9.08108108 Z M65.4702703,9.08108108 C65.4702703,6.27027027 63.7837838,4.32432432 61.2324324,4.32432432 C58.6378378,4.32432432 56.9297297,6.27027027 56.9297297,9.08108108 C56.9297297,11.8918919 58.6378378,13.8378378 61.2324324,13.8378378 C63.7837838,13.8378378 65.4702703,11.8918919 65.4702703,9.08108108 Z M88.0216216,2.59459459 L85.4918919,2.59459459 L82.8972973,10.7459459 C82.7891892,11.0486486 82.6378378,11.9567568 82.6378378,11.9567568 C82.6378378,11.9567568 82.4216216,11.0486486 82.3351351,10.7459459 L79.8054054,2.59459459 L77.9243243,2.59459459 L75.4162162,10.7459459 L75.0918919,11.9567568 C75.0702703,11.8702703 74.9189189,11.027027 74.8324324,10.7459459 L72.2162162,2.59459459 L69.6,2.59459459 L74.0540541,15.5675676 L75.9783784,15.5675676 L78.5513514,7.80540541 C78.6378378,7.54594595 78.8108108,6.83243243 78.8324324,6.81081081 C78.8324324,6.87567568 78.9837838,7.52432432 79.0918919,7.80540541 L81.6648649,15.5675676 L83.5891892,15.5675676 L88.0216216,2.59459459 Z M98.7459459,11.827027 C98.7459459,9.57837838 97.4486486,8.3027027 94.4216216,7.54594595 C92.6486486,7.11351351 92.1945946,6.52972973 92.1945946,5.77297297 C92.1945946,4.84324324 92.9513514,4.28108108 94.227027,4.28108108 C95.372973,4.28108108 96.6702703,4.8 97.5783784,5.40540541 L98.1405405,3.56756757 C97.2756757,2.8972973 95.8486486,2.29189189 94.2486486,2.29189189 C91.4594595,2.29189189 89.772973,3.82702703 89.772973,5.94594595 C89.772973,7.80540541 90.8540541,9.25405405 93.5783784,9.92432432 C95.6972973,10.4432432 96.3027027,11.0054054 96.3027027,12.0864865 C96.3027027,13.2324324 95.3081081,13.8810811 94.0108108,13.8810811 C92.2378378,13.8810811 90.8756757,12.9513514 90.0108108,12.1297297 L89.4054054,14.2054054 C90.2918919,14.9837838 91.8486486,15.827027 94.0108108,15.827027 C96.4540541,15.827027 98.7459459,14.6162162 98.7459459,11.827027 Z M113.708108,9.57837838 L113.708108,2.59459459 L111.135135,2.59459459 L111.135135,9.49189189 C111.135135,12.3027027 109.924324,13.6648649 107.805405,13.6648649 C105.686486,13.6648649 104.475676,12.3027027 104.475676,9.49189189 L104.475676,2.59459459 L101.794595,2.59459459 L101.794595,9.57837838 C101.794595,13.9675676 104.345946,15.9351351 107.762162,15.9351351 C111.178378,15.9351351 113.708108,13.9675676 113.708108,9.57837838 Z M124.345946,10.1189189 L128.194595,15.5675676 L125.297297,15.5675676 L121.708108,10.4 L120.086486,10.4 L120.086486,15.5675676 L117.448649,15.5675676 L117.448649,2.59459459 L122.551351,2.59459459 C125.621622,2.59459459 126.940541,4.41081081 126.940541,6.50810811 C126.940541,8.25945946 126.010811,9.64324324 124.345946,10.1189189 Z M120.086486,4.47567568 L120.086486,8.54054054 L122.118919,8.54054054 C123.762162,8.54054054 124.345946,7.67567568 124.345946,6.52972973 C124.345946,5.36216216 123.762162,4.47567568 122.118919,4.47567568 L120.086486,4.47567568 Z M139.156757,4.64864865 L139.156757,2.59459459 L130.854054,2.59459459 L130.854054,15.5675676 L133.491892,15.5675676 L133.491892,9.81621622 L138.075676,9.81621622 L138.075676,7.78378378 L133.491892,7.78378378 L133.491892,4.64864865 L139.156757,4.64864865 Z"/><path class="grsf-logo-icon" d="M0.432432432,15.1400109 C1.67943386,13.6219536 3.657468,11.6037062 6.36653483,9.08526863 C10.4301351,5.30761219 15.299852,2.93504437 16.6855975,3.5586873 C18.071343,4.18233024 14.5139907,8.33415191 15.3083784,11.5197705 C15.8379702,13.6435162 16.9333756,14.850263 18.5945946,15.1400109 L0.432432432,15.1400109 Z"/></g></svg></a></div></div>'],
    M = {
      FILLED: '<svg class="grsf-referral-stamp-filled" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 60 41"><polygon points="12.825 40.802 60 0 14.385 25.656 0 14.389"/></svg>',
      EMPTY: '<svg class="grsf-referral-stamp-empty" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 60 41"><polygon points="12.825 40.802 60 0 14.385 25.656 0 14.389"/></svg>'
    },
    P = {
      CONVERSION_COUNT: "CONVERSION_COUNT",
      LEADER_BOARD: "LEADER_BOARD"
    },
    B = {
      DRAFT: "DRAFT",
      PENDING: "PENDING",
      IN_PROGRESS: "IN_PROGRESS",
      COMPLETE: "COMPLETE",
      CANCELLED: "CANCELLED",
      DELETED: "DELETED"
    },
    U = {
      OVERRIDE: 2147483647,
      PRIMARY: 3,
      SECONDARY: 2,
      TERTIARY: 1
    },
    F = {
      CAMPAIGN: "grsf.cid",
      CONTACT: "grsf.ccid",
      ERROR: "grsf.err"
    },
    k = 10,
    G = {
      REFERRER_ID: "grsf",
      SHOW_MODAL: "grsf_window",
      CAMPAIGN_ID: "grsf_cid",
      CONTACT_ID: "grsf_ccid",
      ERROR: "grsf_err"
    },
    H = "https://growsurf.com/c/",
    W = "https://growsurf.com/",
    x = {
      BASE: "c/",
      ROUTES: {
        SCRIPT_DETECT: "script-detect",
        CONTACTS: "contacts",
        DETAIL: "detail"
      },
      PARAMS: {
        EMAIL: "email=",
        NAME: "name=",
        METADATA: "metadata=",
        OFFSET: "offset=",
        CALLBACK: "callback=",
        REFERRER_URL: "referrerUrl="
      }
    },
    Y = "https://js.growsurf.com/growsurf.min.css",
    V = {
      EMAIL: {
        BASE: "mailto:?&subject=",
        BODY: "&body="
      },
      TWITTER: {
        BASE: "https://twitter.com/home?status="
      },
      FACEBOOK: {
        BASE: "https://www.facebook.com/sharer/sharer.php?u=",
        TITLE: "&title="
      },
      PINTEREST: {
        BASE: "https://pinterest.com/pin/create/button/?url=",
        DESCRIPTION: "&media=&description="
      }
    },
    Z = {
      ANONYMOUS: "Anonymous"
    },
    K = {
      OFFSET: 50
    },
    q = K.OFFSET;
  e.open = function(e) {
    e && !D.contact && w.getCampaign(e), e && D.contact && w.getCampaignAndContact(e, D.contact), a(h.SHARE_MODAL_CONTAINER, "display", "block"), s(h.SHARE_MODAL, h.ANIMATION.ENTER), a(h.BACKDROP, "height", document.body.scrollHeight), a(h.BACKDROP, "display", "block"), g();
    var n = document.body.getElementsByClassName(h.SHARE_MODAL_CONTAINER);
    setTimeout(function() {
      for (var e = 0; e < n.length; e++) return n[e].scrollIntoView({
        behaviour: "smooth"
      })
    }, 500)
  }, e.close = function() {
    s(h.SHARE_MODAL, h.ANIMATION.EXIT), a(h.BACKDROP, "display", "none"), setTimeout(function() {
      a(h.SHARE_MODAL_CONTAINER, "display", "none")
    }, 200)
  }, e.createContact = function(e, n, s, a, t) {
    w.createContact(e, n, s, a, t)
  }, e.getCampaign = function(e, n) {
    D.contact || (n = n || "growsurf.parseResponse.getCampaign", w.getCampaign(e, n)), D.contact && (n = n || "growsurf.parseResponse.getCampaignAndContact", w.getCampaignAndContact(e, D.contact, n))
  }, w.detectHeadScript = function() {
    var n = e.parseResponse.detectHeadScript,
      s = W + x.BASE + x.ROUTES.SCRIPT_DETECT + "?" + x.PARAMS.REFERRER_URL + window.location.href;
    J.send(s, {
      onSuccess: function(e) {
        n(e)
      }
    })
  }, e.parseResponse.detectHeadScript = function(e) {
    if (200 !== e.meta.code) {
      var n = JSON.stringify(e.meta);
      E(null, null, n), console.log("Error on growsurf.parseResponse.detectHeadScript()"), console.log(n), console.log("Please contact team@growsurf.com for help!")
    } else e.meta.code
  }, w.createContact = function(n, s, a, t, r) {
    var o = r || e.parseResponse.createContact;
    "string" != typeof n && console.log("GrowSurf campaignId must be a string!"), "string" != typeof s && console.log("GrowSurf email must be a string!"), "string" != typeof a && console.log("GrowSurf name must be a string!"), t && "object" != typeof t && console.log("GrowSurf metadata must be an object!"), "object" == typeof t && (t = JSON.stringify(t));
    var c = W + x.BASE + n + "?" + x.PARAMS.EMAIL + s + "&" + x.PARAMS.NAME + a + "&" + x.PARAMS.METADATA + t + "&" + x.PARAMS.REFERRER_URL + window.location.href;
    J.send(c, {
      onSuccess: function(e) {
        o(e)
      }
    })
  }, e.parseResponse.createContact = function(n) {
    var s, a, t;
    if (200 !== n.meta.code) s = null, a = null, t = JSON.stringify(n.meta), E(s, a, t), console.log("Error on growsurf.parseResponse.createContact()"), console.log(t), console.log("Please contact team@growsurf.com for help!");
    else if (200 === n.meta.code) {
      var r = n.data.campaign.customCss;
      s = n.data.campaign.urlId, a = n.data.contact.id, t = null, E(s, a, t), D.campaign = C(F.CAMPAIGN), D.contact = C(F.CONTACT), r && R(r), p(n.data.campaign.status, n.data.campaign.type, a, null), O(n), g(), e.open()
    }
  }, w.getCampaignAndContact = function(n, s, a) {
    var t = a || e.parseResponse.getCampaignAndContact;
    "string" != typeof n && console.log("GrowSurf campaignId must be a string!"), "string" != typeof s && console.log("GrowSurf contactId must be a string!");
    var r = W + x.BASE + n + "/" + s + "?" + x.PARAMS.REFERRER_URL + window.location.href;
    J.send(r, {
      onSuccess: function(e) {
        t(e)
      }
    })
  }, e.parseResponse.getCampaignAndContact = function(e) {
    var n, s, a;
    if (200 !== e.meta.code) n = null, s = null, a = JSON.stringify(e.meta), E(n, s, a), 500 === e.meta.code && p(B.DELETED, P.LEADER_BOARD, null, !0), console.log("Error on growsurf.parseResponse.getCampaignAndContact()"), console.log(a), console.log("Please contact team@growsurf.com for help!");
    else if (200 === e.meta.code) {
      var t = e.data.campaign.customCss;
      t && R(t), p(e.data.campaign.status, e.data.campaign.type, e.data.contact.id, null), O(e), g()
    }
  }, w.getContacts = function(n, s) {
    var a = e.parseResponse.getContacts;
    "string" != typeof n && console.log("GrowSurf campaignId must be a string!"), s += 1;
    var t = W + x.BASE + n + "/" + x.ROUTES.CONTACTS + "?" + x.PARAMS.OFFSET + s + "&" + x.PARAMS.REFERRER_URL + window.location.href;
    J.send(t, {
      onSuccess: function(e) {
        a(e)
      }
    })
  }, e.parseResponse.getContacts = function(e) {
    if (200 !== e.meta.code) {
      var n = JSON.stringify(e.meta);
      E(null, null, n), console.log("Error on growsurf.parseResponse.getContacts()"), console.log(n), console.log("Please contact team@growsurf.com for help!")
    } else 200 === e.meta.code && (A(e.data.contacts), e.data.contacts.length < K.OFFSET && a(h.LOAD_MORE_CONTACTS_BUTTON, "display", "none"), q += K.OFFSET)
  }, w.getCampaign = function(n, s) {
    var a = s || e.parseResponse.getCampaign;
    "string" != typeof n && console.log("GrowSurf campaignId must be a string!");
    var t = W + x.BASE + n + "/" + x.ROUTES.DETAIL + "?" + x.PARAMS.REFERRER_URL + window.location.href;
    J.send(t, {
      onSuccess: function(e) {
        a(e)
      }
    })
  }, e.parseResponse.getCampaign = function(e) {
    if (200 !== e.meta.code) {
      var n = JSON.stringify(e.meta);
      E(null, null, n), 500 === e.meta.code && p(B.DELETED, P.LEADER_BOARD, null, !0), console.log("Error on growsurf.parseResponse.getCampaign()"), console.log(n), console.log("Please contact team@growsurf.com for help!")
    } else if (200 === e.meta.code) {
      e.data.campaign = e.data;
      var s = e.data.campaign.customCss;
      s && R(s), p(e.data.campaign.status, e.data.campaign.type, null, null), O(e), g()
    }
  }, w.getContact = function(n, s) {
    var a = e.parseResponse.getContact,
      t = W + x.BASE + n + "/" + s + "/" + x.ROUTES.DETAIL + "?" + x.PARAMS.REFERRER_URL + window.location.href;
    J.send(t, {
      onSuccess: function(e) {
        a(e)
      }
    })
  }, e.parseResponse.getContact = function(e) {
    if (200 !== e.meta.code) {
      var n = JSON.stringify(e.meta);
      E(null, null, n), console.log("Error on growsurf.parseResponse.getContact()"), console.log(n), console.log("Please contact team@growsurf.com for help!")
    } else e.meta.code
  };
  var J = function() {
    var e = {};
    return e.send = function(e, n) {
      var s = n.callbackName || "callback" + Math.random().toString(36).substring(7),
        a = n.onSuccess || function() {},
        t = n.onTimeout || function() {},
        r = n.timeout || 10,
        o = window.setTimeout(function() {
          window[s] = function() {}, t()
        }, 1e3 * r);
      window[s] = function(e) {
        window.clearTimeout(o), a(e)
      };
      var c = document.createElement("script");
      c.type = "text/javascript", c.async = !0, c.src = e + "&" + x.PARAMS.CALLBACK + s, document.getElementsByTagName("head")[0].appendChild(c)
    }, e
  }();
  window.addEventListener("load", function() {
    N(), n(), w.detectHeadScript(), E(i(G.CAMPAIGN_ID), i(G.CONTACT_ID), i(G.ERROR)), D.campaign = C(F.CAMPAIGN), D.contact = C(F.CONTACT), D.error = C(F.ERROR);
    var s = T();
    D.campaign && D.contact && w.getCampaignAndContact(D.campaign, D.contact), s && w.getCampaign(s), i(G.REFERRER_ID), i(G.SHOW_MODAL) && (s || D.campaign) && e.open(), S(), _(h.SHARE_MODAL_CLOSE), _(h.BACKDROP), I(h.WIDGET), v()
  })
}(window.growsurf = window.growsurf || {});
