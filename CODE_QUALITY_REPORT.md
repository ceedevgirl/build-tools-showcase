# CODE_QUALITY_REPORT.md

## Overview

This report documents the linting, formatting, and configuration issues encountered during the Build Tool Showcase project development, along with the steps taken to resolve each.



## 1. ESLint Configuration Conflict: Flat Config vs `.eslintrc.json`

**Issue:   
- ESLint threw errors related to using `"extends"` in `eslint.config.mjs`.  
- The flat config system in ESLint v8+ does not support `"extends"` key the same way `.eslintrc.json` does.  
- The project had both `eslint.config.mjs` and `.eslintrc.json`, causing conflicts.

**Resolution: 
- Deleted `.eslintrc.json` to avoid config conflicts.  
- Rewrote `eslint.config.mjs` to follow ESLint flat config format without `"extends"`.  
- Imported and spread configurations directly instead of using `"extends"`.  
- Used official ESLint migration guide to adapt the config accordingly.



## 2. ESLint CLI Flags Issue

**Issue:  
- Using CLI flags like `--ext` caused errors because with flat config, some CLI flags are no longer supported.

**Resolution: 
- Simplified npm scripts to just run `eslint src` without `--ext`.  
- Relied on config file to specify file extensions to lint.



## 3. Prettier Errors for Windows Line Endings (`CRLF` vs `LF`)

**Issue:   
- Prettier and ESLint reported many errors like `Delete '␍' prettier/prettier` due to Windows-style carriage return characters (`CRLF`).

**Resolution: 
- Ran `npx prettier --write .` to reformat all files with consistent LF line endings.  


## 4. HTML Syntax Error: Unexpected Closing Tag

**Issue:   
- ESLint or the build tools reported a syntax error in `src/index.html`: an unexpected closing `</div>` tag likely due to an extra or misplaced closing tag.

**Resolution: 
- Manually reviewed and fixed the HTML file to ensure all tags are properly opened and closed.



## 5. `npm run lint` Throws "Oops! Something went wrong!" with `"extends"` Key

**Issue:   
- ESLint 8.57+ with flat config does not support `"extends"` key, causing runtime errors.

**Resolution: 
- Updated ESLint config file to flat config style, replacing `"extends"` with direct config objects inclusion.  
- Verified ESLint config works correctly without legacy keys.



## 6. Warnings for `console.log` Statements

**Issue:   
- ESLint warned about unexpected `console.log()` usage (`no-console` rule).

**Resolution:   
  Disabled `no-console` rule in `eslint.config.mjs` by setting `'no-console': 'off'`.



## Summary

| Issue Description                              | Resolution Summary

 ESLint config conflict with `.eslintrc.json` | Deleted `.eslintrc.json`, used flat config in `eslint.config.mjs` 
 Unsupported CLI flags with flat config        | Simplified npm lint script to `eslint src`              
 Prettier errors due to CRLF line endings      | Ran `npx prettier --write .` to fix line endings        
 HTML syntax error (unexpected closing tag)    | Fixed HTML tag structure manually                        
 `extends` key not supported in flat config    | Rewrote config to avoid `extends` key                   
 `console.log` warnings                         | Removed logs or disabled `no-console` rule              



## Final Notes

- The project now passes linting and formatting checks successfully.  
- Husky pre-commit hook runs lint and format commands to maintain code quality before commits.  
- Build tools and TypeScript setup are properly configured and integrated.  
- Unit testing with Jest has been implemented to ensure code correctness.



