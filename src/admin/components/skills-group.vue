<template lang="pug">
  .skill__container
    input(type="text" placeholder="Создать группу").skill-input
    button(type="button") Добавить
    hr
    table
      tr(v-for="n in 10")
        td Скилл
        td процент
        td
          button(type="button") Удалить
          button(type="button") Изменить
    hr
    .add-skill-wrapper.blocked
      input(type="text" placeholder="Добавить скилл")      
      button(type="button") Добавить
  
</template>

<script>

</script>