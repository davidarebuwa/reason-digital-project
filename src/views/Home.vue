<template>
  <CoverImageSection />
    <TextImageSection />
    <HelpSection />
    <ServicesSection />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { AppHeader,
    CoverImageSection,
    TextImageSection,
    ServicesSection,
    HelpSection,
} from "@/components";

export default {
  name: 'App',
  components: {
    CoverImageSection,
    TextImageSection,
    ServicesSection,
    HelpSection,
  }
}
</script>
