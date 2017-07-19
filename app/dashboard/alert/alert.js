"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alert {
    constructor(nomA, optkw, frbKw, srcAuth, srcBl, lang, dI) {
        this.nomA = nomA;
        this.optkw = optkw;
        this.frbKw = frbKw;
        this.srcAuth = srcAuth;
        this.srcBl = srcBl;
        this.lang = lang;
        this.dI = dI;
        this.descA = nomA;
        this.optKeywords = optkw;
        this.forbidenKeywords = frbKw;
        this.srcAutorises = srcAuth;
        this.srcBloques = srcBl;
        this.langue = lang;
        this.descI = dI;
        //    this.fbPage = fb ;
    }
    setFB(fb) {
        this.fbPage = fb;
    }
}
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map