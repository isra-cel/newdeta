"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createSidebarItem } from "../actions/sidebar";
import { createUser } from "../actions/adduser";

export default function Admin(){

    return(

      <div className=" flex flex-col gap-10">

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

   <form action={createUser}>
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input 
          id="name" 
          name="name"
          type="text" 
          placeholder="Max Leiter" />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldDescription>
            Please input a valid email
          </FieldDescription>
          <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="xyz@gmail.com" />
        </Field>
      </FieldGroup>
    </FieldSet>

        <Button type="submit">
          Submit
        </Button>

    </form>

    </div>
    )
}
