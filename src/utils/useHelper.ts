import { useDisplay } from "vuetify";
import { img_host } from "@/utils/imageSource";
import { computed } from "vue";
export function useHelper() {
  const { name } = useDisplay();
  const webOrMobile = computed(() => {
    if (name.value === "xs") return "mobile";
    else return "web";
  });
  const getImageUrl = (fileName: string): string => {
    return `./imgs/${img_host[webOrMobile.value]}/${fileName}`;
  };

  return {
    webOrMobile,
    getImageUrl,
  };
}
