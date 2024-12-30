"use client";

import Script from "next/script";
import styles from "./TiktokProfile.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";

import { InstagramEmbed } from "react-social-media-embed";

const TiktokProfile = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>Socials</SectionHeader>
      <div className={styles.socialsBox}>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@flooringgators"
          data-unique-id="flooringgators"
          data-embed-type="creator"
          style={{
            maxWidth: "780px",
            minWidth: "288px",
          }}
        >
          {" "}
          <section>
            {" "}
            <a
              target="_blank"
              href="https://www.tiktok.com/@flooringgators?refer=creator_embed"
            >
              @flooringgators
            </a>{" "}
          </section>{" "}
        </blockquote>{" "}
        <Script
          async
          strategy="lazyOnload"
          src="https://www.tiktok.com/embed.js"
        ></Script>
        <div className={styles.instaDiv}>
          <InstagramEmbed
            url="https://www.instagram.com/p/DCAWaFbx62w/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={328}
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/DDDWFH9Robh/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={328}
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/C8LRaovgk_v/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={328}
          />
        </div>
      </div>
    </section>
  );
};

export default TiktokProfile;
