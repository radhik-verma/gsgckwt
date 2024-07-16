<template>
  <div class="flex justify-around items-center">
    <div>
      <img src="/assets/images/logo.png" alt="GSGC" class="h-[100px]">
    </div>
    <NavigationMenu>
      <NavigationMenuList v-for="menu in menuItems">
        <NavigationMenuItem v-if="menu.children">
          <NavigationMenuTrigger>

            {{ menu.item }}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
              <li v-for="menuItem in menu.children" :key="menuItem.item" class="row-span-3">
                <NavigationMenuLink as-child :href=menuItem.url>
                  <a class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-3 py-2 no-underline outline-none focus:shadow-md" >
                    <div class="mb-2 mt-4 text-lg font-medium">
                      {{ menuItem.item }}
                    </div>
                    <!-- <p class="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p> -->
                  </a>
                </NavigationMenuLink>
              </li>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem v-else>
          <NavigationMenuLink :href=menu.url :class="navigationMenuTriggerStyle()">
            {{ menu.item }}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>



</template>

<script setup>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "~/components/ui/navigation-menu";
import { ref, onMounted } from "vue";
import axios from "axios";

const menuItem = ref([]);
//const posts = ref([])
const { data, error } = useFetch("/api/menu");

if (error.value) {
  console.error("Error fetching posts:", error.value);
} else {
  menuItem.value = data.value;
}

const menuItems = ref([
  {
    item: "Home",
    url: "/",
  },
  {
    item: "About Us",
    url: "/about",
    children: [
      { item: "Who we are", url: "/" },
      { item: "Our mission", url: "/about/mission" },
      { item: "Our vision", url: "/about/vision" },
      { item: "Our Strengths", url: "/about/strength" },
      { item: "Message from CEO", url: "/" },
      { item: "Certifications", url: "/" },
    ],
  },
  {
    item: "Core Business",
    url: "/core-business",
    children: [
      { item: "Steel Fabrication", url: "/" },
      { item: "Civil Construction", url: "/" },
      { item: "Trading", url: "/" },
      { item: "Scaffolding Rental Services", url: "/" },
    ],
  },
  
  {
    item: "Projects",
    url: "/projects",
    children: [
      { item: "Ongoing Projects", url: "/" },
      { item: "Completed Projects", url: "/" },
    ],
  },
  {
    item: "QHSE",
    url: "/qhse",
    children: [
      { item: "Quality", url: "/" },
      { item: "HSE", url: "/" },
      { item: "Qualification", url: "/" }
    ],
  },
  {
    item: "Media",
    url: "/media",
    children: [
      { item: "Photos", url: "/" },
      { item: "Videos", url: "/" },
      { item: "News", url: "/" }
    ],
  },
  {
    item: "Contact",
    url: "/contact"
  },
  
]);
</script>


