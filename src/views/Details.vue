<template>
  <div class="details-section">
    <div class="details-section-content">
        <h1 class="details-section-title">Details</h1>
        <p class="details-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc.
        </p>
        <img 
        class="details-section-image"
        loading="lazy"
        src="../assets/detail-cover-image.jpg" alt="placeholder image" />
        <p class="details-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc.
        </p>
        <img 
        class="details-section-image"
        loading="lazy"
        src="../assets/detail-image.jpg" alt="placeholder image" />
        <p class="details-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc.
        </p>

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
.details-section {
  width: auto;
  height: auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.details-section-content {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.details-section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.details-section-text {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

.details-section-image {
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
}




</style>
