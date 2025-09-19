"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Home from "./components/Home";
import Loader from "./components/Loader";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffe6f0; /* fallback colore */
  z-index: -1;
`;

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <BackgroundWrapper>
        <Image src="/festa.jpg" alt="Sfondo festa" fill style={{ objectFit: "cover" }} priority />
        {!showApp && <Loader onComplete={() => setShowApp(true)} />}
      </BackgroundWrapper>

      {mounted && showApp && <Home />}
    </>
  );
};

export default Page;
