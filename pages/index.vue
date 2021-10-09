<template>
  <div>
    <Store/>
    <Lancamentos/>
    <Videos/>
    <FacaParte/>
  </div>
</template>

<script>
if (process.browser) {  
  var flowtype = require('flowtype')

  flowtype(document.body, {
    maxWidth: '800px',
    minWidth: '300px',
    min: 14,
    max: 22
  })
}
export default {}
</script>
