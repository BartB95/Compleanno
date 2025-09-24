"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Home from "./components/Home";
import Loader from "./components/Loader";

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  width: 100%;
  height: 100vh;
  background: #ffe6f0; /* fallback colore */
  z-index: -2; /* sotto tutto */
`;

const LoaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* sopra tutto */
  background: rgba(255, 230, 240, 0.8); /* sfondo semitrasparente */
`;

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Background full-screen */}
      <BackgroundWrapper>
        <Image
          src="/festa.jpg"
          alt="Sfondo festa"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </BackgroundWrapper>

      {/* Loader sopra tutto */}
      {!showApp && (
        <LoaderOverlay>
          <Loader
            bgColor="transparent"
            duration={1500}
            onComplete={() => setShowApp(true)}
          />
        </LoaderOverlay>
      )}

      {/* App principale */}
      {mounted && showApp && <Home />}
    </>
  );
};

export default Page;
