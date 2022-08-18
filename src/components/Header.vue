<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-nav toggleable type="dark" variant="dark" tabs>
          <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
          <b-nav-item disabled>Couner: {{ numCorrect }}/{{numTotal}} </b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>