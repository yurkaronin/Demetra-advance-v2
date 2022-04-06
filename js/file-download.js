const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(
  inputElement, {
    allowDrop: false,
    allowPaste: false,
    allowReplace: false,
    allowRevert: false,
    allowProcess: false,
    onupdatefiles: (files) => {
      const textAddFile = document.querySelector(".filepond--drop-label");
      if (files.length === 0) {
        textAddFile.style.display = 'block';
      } else {
        textAddFile.style.display = 'none';
      }
    },
  }
);

document.querySelector(".filepond--credits").remove();