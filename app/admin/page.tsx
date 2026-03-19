"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createSidebarItem } from "../actions/sidebar";

export default function Admin(){

    return(
      <form action={createSidebarItem}>

        <Input 
        id="name" 
        name="name"
        placeholder="Sidebar item name" />
      
        <Input 
         id="icon"
         name="icon"
         placeholder="Icon name" />
      
        <Input
          id="link"
          name="link"
          type="text"
          placeholder="/link"/>
      
        <Button type="reset" variant="outline">
          Reset
        </Button>

        <Button type="submit">
          Submit
        </Button>
      
    </form>
    )
}
