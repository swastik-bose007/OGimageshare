"use client";
import React from "react";
import { IKImage, ImageKitProvider } from "imagekitio-next";
import ListRender from "./listrender";
import Modal from "./Modal";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {
  return (
    <div className="App">
      {/* <ImageKitProvider urlEndpoint={urlEndpoint}>
        <h1>ImageKit Next.js quick start</h1>
        <IKImage src="https://ik.imagekit.io/s3ue4qpie/tr:h-1000,w-2000:l-text,i-03,co-FFFFFF,fs-100,lx-185,ly-670,l-end:l-text,i-03,co-FFFFFF,fs-100,lx-440,ly-670,l-end:l-text,i-03,co-FFFFFF,fs-100,lx-695,ly-670,l-end:l-text,i-03,co-FFFFFF,fs-100,lx-945,ly-670,l-end:l-text,i-03,co-FFFFFF,fs-100,lx-1200,ly-670,l-end:l-text,i-03,co-FFFFFF,fs-100,lx-1454,ly-670,l-end:l-text,i-03,co-FFFFFF,fs-100,lx-1708,ly-670,l-end/letuspurge.png" transformation={[{ height: "1000", width: "2000" }]} alt="let us $purge" />
      </ImageKitProvider> */}
      <ListRender />
      <Modal />
    </div>
  );
}