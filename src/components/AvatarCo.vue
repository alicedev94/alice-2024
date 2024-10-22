<template>
  <div class="eme-avatar">
    <div class="eme-core-avatar">
      <img src="/src/assets/img/profile.png" alt="Avatar" />
    </div>
  </div>
</template>

<style scoped>
.eme-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 5rem;
  background-color: var(--eme-color-dark);
}

.eme-core-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  overflow: hidden;
}

.eme-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
