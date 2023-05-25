"use client"
import React from 'react';
import UserCard from "@/components/UserCard";

export async function getUser(){
    const res=await fetch(`https://api.escuelajs.co/api/v1/users?limit=10`)
    const data=res.json()
    return data;
}

export  default  async function User() {
    const users=await getUser();
    console.log(users);
    return (
        <div className="flex min-h-screen flex-wrap items-center justify-between p-24">
            {users.map((user)=>(<UserCard
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                name={user.name}
            />))}
        </div>
    );
}
