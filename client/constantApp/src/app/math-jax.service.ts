import { Injectable } from '@angular/core';
import katex, { KatexOptions } from 'katex';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import { extractMath } from 'extract-math'

@Injectable({
  providedIn: 'root'
})
export class LatexService {

  constructor(private domSanitizer: DomSanitizer) {}

  renderToString(equation: any, options?: KatexOptions): string {
    return katex.renderToString(equation, options);
  }

  LatextoStr(latex: any) {
      var _html: any = [];
      var _safeHtml: SafeHtml | undefined;
      // Break the string into segments ('text', 'inline', and 'display')
      const segments = extractMath(latex, {
        delimiters: {
          inline: ['$', '$'],
          display: ['$$', '$$']
        }
      })

      // Parse the LaTeX equation to HTML
      for (let i = 0; i < segments.length; i++) {
        if (segments[i]['type'] == 'text') {
          _html.push(segments[i]['value'])
        }
        else if (segments[i]['type'] == 'inline') {
          _html.push(this.renderToString(segments[i]['value'], { output: "mathml", throwOnError: false, displayMode: false }))
        }
        else if (segments[i]['type'] == 'display') {
          _html.push(this.renderToString(segments[i]['value'], { output: "mathml", throwOnError: false, displayMode: true }))
        }
        else {
          console.warn("An error occurred when parsing the LaTex input. The type of the segment is not recognized.");
        }
      }

    _safeHtml = this.domSanitizer.bypassSecurityTrustHtml(_html.join(""));

    return _safeHtml

  }
}
