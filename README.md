# Checkmark Command

## Description
A Plugin for Logseq that adds a simple slash command that inserts the proper html syntax to render a checkmark button. This plugin exists because the regular markdown syntax for checkmarks is not yet supported for a single line block.

## Usage
Type ``/Checkmark`` to use.

If the block already contains content it will be placed at the correct place in the html script, otherwise placeholder text will be inserted. 

If it has to deal with already existing content regular expressions are used to filter out the ``/Checkmark`` command. This might also filter out actual content if the command gets autocompleted and the character following the command matches the Regex (eg. "/checkMy text." would afterwards render "y text."). So best practice would be to type the command at the end of the block or be sure to leave a space between the actual content and typing the command.
