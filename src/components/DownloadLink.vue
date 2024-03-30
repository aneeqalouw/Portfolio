<template>
    <div class="d-flex justify-content-center" style="text-decoration: underline;">
      <button @click="downloadPdf" class="btn fs-4">Download CV</button>
      <div class="my-3">
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4992 10.505H17.9993V0.5H11.9996V10.505H7.49971L14.9994 18.8425L22.4992 10.505ZM29.006 21.3971C28.691 21.0236 26.5895 18.524 25.9896 17.872C25.5691 17.424 25.009 17.1742 24.4266 17.175H21.7912L26.387 22.1675H21.0712C20.999 22.166 20.9277 22.1857 20.8645 22.2247C20.8013 22.2636 20.7484 22.3204 20.7112 22.3893L19.4873 25.5125H10.5116L9.28765 22.3893C9.25025 22.3206 9.19735 22.264 9.1342 22.2251C9.07105 22.1862 8.99985 22.1664 8.92766 22.1675H3.61185L8.20618 17.175H5.57228C4.9768 17.175 4.40832 17.4401 4.00933 17.872C3.40935 18.5257 1.30793 21.0253 0.992937 21.3971C0.259462 22.2659 -0.144024 22.9579 0.0479698 23.8133L0.88944 28.9392C1.08143 29.7963 1.9259 30.5 2.76737 30.5H27.2345C28.076 30.5 28.9205 29.7963 29.1125 28.9392L29.9539 23.8133C30.1429 22.9579 29.7409 22.2659 29.006 21.3971Z" fill="#D19D49"/>
</svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DownloadPdfButton',
    props: {
      pdfUrl: {
        type: String,
        required: true
      },
      pdfFileName: {
        type: String,
        required: true
      }
    },
    methods: {
      downloadPdf() {
        const link = document.createElement('a');
        link.href = this.pdfUrl;
        link.target = '_blank';
        link.download = this.pdfFileName;
        document.body.appendChild(link);
        link.click();
        // document.body.removeChild(link);
      }
    }
  }
  </script>

<style scoped>
button{
    color: #D19D49;
}
div{
    color: #D19D49;   
}
</style>