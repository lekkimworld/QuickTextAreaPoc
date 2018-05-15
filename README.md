# QuickTextAreaPoC

Simple Lightning Component proof-of-concept for using QuickText style snippet insertions in a textarea in Salesforce 
Lightning. The component may be placed on a record page and will simply display a `textarea`. The QuickText functionality 
is activated using `Cmd+.` on Mac and `Ctrl+.` on other platforms. Pressing the beforementioned key combination wil 
popup a dialog illustrating the typeahead for QuickText. Currently the input accepts "pensionsinfo" and "kredit" as 
keywords which will be converted into a snippet of text before being inserted into the main textarea. The text inserted 
at the caret position in the textarea. 

Pressing ESC closes the dialog without making any snippet selection.

## Known limitations
* Pop up not "modal" ie. user could probably set focus to textarea manually
* Hard coded snippet values. Should be integrated with actual `Quick Text` object
* No error checking
* No merge fields support
