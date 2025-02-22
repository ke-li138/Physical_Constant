import {
  __commonJS
} from "./chunk-WKYGNSYM.js";

// ../../node_modules/extract-math/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "../../node_modules/extract-math/node_modules/escape-string-regexp/index.js"(exports, module) {
    "use strict";
    module.exports = (string) => {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    };
  }
});

// ../../node_modules/extract-math/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/extract-math/lib/index.js"(exports) {
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractMath = void 0;
    var escape_string_regexp_1 = __importDefault(require_escape_string_regexp());
    var Context = (
      /** @class */
      function() {
        function Context2(options) {
          var _this = this;
          var _a, _b, _c, _d, _e, _f;
          this.segments = [];
          var escape = (_a = options === null || options === void 0 ? void 0 : options.escape) !== null && _a !== void 0 ? _a : "\\";
          this.delimiters = {
            inline: (_c = (_b = options === null || options === void 0 ? void 0 : options.delimiters) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c !== void 0 ? _c : ["$", "$"],
            display: (_e = (_d = options === null || options === void 0 ? void 0 : options.delimiters) === null || _d === void 0 ? void 0 : _d.display) !== null && _e !== void 0 ? _e : ["$$", "$$"]
          };
          this.allowSurroundingSpace = new Set((_f = options === null || options === void 0 ? void 0 : options.allowSurroundingSpace) !== null && _f !== void 0 ? _f : ["display"]);
          var _g = __read([
            escape,
            this.delimiters.inline[0],
            this.delimiters.inline[1],
            this.delimiters.display[0],
            this.delimiters.display[1]
          ].map(escape_string_regexp_1.default), 5), escEscape = _g[0], escInlineBegin = _g[1], escInlineEnd = _g[2], escDisplayBegin = _g[3], escDisplayEnd = _g[4];
          var escapedDelimiter = escEscape + "(" + escDisplayBegin + "|" + escDisplayEnd + "|" + escInlineBegin + "|" + escInlineEnd + ")";
          var _h = __read(Object.entries(this.delimiters).map(function(_a2) {
            var _b2 = __read(_a2, 2), mode = _b2[0], delimiters = _b2[1];
            var _c2 = __read(delimiters.map(escape_string_regexp_1.default), 2), begin = _c2[0], end = _c2[1];
            var math = "(?:(?!" + end + ").|" + escEscape + end + ")*?(?:" + escEscape + end + "|[^" + escEscape + "])";
            if (!_this.allowSurroundingSpace.has(mode)) {
              math = "\\S" + math.substring(0, math.length - 2) + "\\s])|[^" + escEscape + "\\s]";
            }
            return begin + "(" + math + ")" + end + "(?!\\d)";
          }), 2), inlineMath = _h[0], displayMath = _h[1];
          this.regex = new RegExp([escapedDelimiter, displayMath, inlineMath].join("|"));
          this.escapedDelimiter = new RegExp(escapedDelimiter, "g");
        }
        Context2.prototype.split = function(input) {
          return input.split(this.regex);
        };
        Context2.prototype.pushText = function(text) {
          if (!text) {
            return;
          }
          var last = this.segments[this.segments.length - 1];
          if (last && last.type === "text") {
            last.value += text;
            last.raw += text;
          } else {
            this.segments.push({ type: "text", math: false, value: text, raw: text });
          }
        };
        Context2.prototype.pushMath = function(mode, text) {
          if (!text) {
            return;
          }
          this.segments.push({ type: mode, math: true, value: text.replace(this.escapedDelimiter, "$1"), raw: text });
        };
        return Context2;
      }()
    );
    function extractMath(input, options) {
      var _a;
      var ctx = new Context(options);
      var _b = __read(ctx.split(input)), text = _b[0], parts = _b.slice(1);
      ctx.pushText(text);
      while (parts.length > 0) {
        var _c = __read(parts), delimiter = _c[0], display = _c[1], inline = _c[2], rest = _c.slice(3);
        if (delimiter) {
          ctx.pushText(delimiter);
        } else {
          ctx.pushMath(display ? "display" : "inline", display || inline);
        }
        _a = __read(rest), text = _a[0], parts = _a.slice(1);
        ctx.pushText(text);
      }
      return ctx.segments;
    }
    exports.extractMath = extractMath;
  }
});
export default require_lib();
//# sourceMappingURL=extract-math.js.map
