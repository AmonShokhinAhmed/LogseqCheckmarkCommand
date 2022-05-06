function main () {
  logseq.Editor.registerSlashCommand(
    'Checkmark',
    async () => {
      const block = await logseq.Editor.getCurrentBlock();
        if (block && block.content) {
          const regex = /\/[Cc]([Hh][Ee][Cc][Kk][Mm][Aa][Rr][Kk]|[Hh][Ee][Cc][Kk][Mm][Aa][Rr]|[Hh][Ee][Cc][Kk][Mm][Aa]|[Hh][Ee][Cc][Kk][Mm]|[Hh][Ee][Cc][Kk]|[Hh][Ee][Cc]|[Hh][Ee]|[Hh]|)/g
          const content = block.content.replace(regex, '');

          await logseq.Editor.updateBlock(block.uuid, '<p><input type="checkbox" class="form-checkbox"> '+content+'</p>');
        }
        else{
          await logseq.Editor.updateBlock(block.uuid, '<p><input type="checkbox" class="form-checkbox"> Insert text here...</p>');
        }
    },
  )
}

// bootstrap
logseq.ready(main).catch(console.error)