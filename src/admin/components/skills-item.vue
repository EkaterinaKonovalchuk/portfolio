<template lang="pug">
  tr()
        td {{skill.title}}
        td {{skill.percent}}
        td
          button(type="button") Удалить
          button(type="button") Изменить
</template>

<script>
  export default{
    props:{
      skill: Object
    },
    methods:{

    }
  }

</script>