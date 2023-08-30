import { Drawer } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Link from "next/link";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  // ドラッグ禁止
  const preventDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={styles["wrap"]}
      onDragStart={preventDrag}
      onDragOver={preventDrag}
    >
      <header className={styles["header"]}>
        {/* ドロワーメニュー */}
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={closeDrawer}
          className={styles["drawer-nav"]}
        >
          <nav className={styles["drawer-menu"]}>
            <ul className={styles["menu-list"]}>
              <li className={styles["menu-items"]}>
                <div className={styles["close-button"]} onClick={closeDrawer}>
                  <CloseOutlinedIcon className={styles["close-icon"]} />
                </div>
                <div>
                  <Scroll
                    href="#about"
                    className={styles["menu-text"]}
                    to="about"
                    smooth={true}
                    duration={600}
                    onClick={closeDrawer}
                  >
                    About
                  </Scroll>
                </div>
              </li>
              <li className={styles["menu-items"]}>
                <Scroll
                  href="#product"
                  className={styles["menu-text"]}
                  to="product"
                  smooth={true}
                  duration={600}
                  onClick={closeDrawer}
                >
                  Product
                </Scroll>
              </li>
              <li className={styles["menu-items"]}>
                <Scroll
                  href="#skill"
                  className={styles["menu-text"]}
                  to="skill"
                  smooth={true}
                  duration={600}
                  offset={-130}
                  onClick={closeDrawer}
                >
                  Skill
                </Scroll>
              </li>
              <li className={styles["menu-items"]}>
                <Scroll
                  href="#interest"
                  className={styles["menu-text"]}
                  to="interest"
                  smooth={true}
                  duration={600}
                  onClick={closeDrawer}
                >
                  Interest
                </Scroll>
              </li>
            </ul>
            <ul className={styles["icon-list"]}>
              <li className={styles["icon-items"]}>
                <Link
                  href="https://puddle-splash-c80.notion.site/portfolio-498e7a7d3b7d4b90a5aef056df5afdc3?pvs=4"
                  target="_blank"
                  className={styles["icon-img"]}
                ></Link>
              </li>
              <li className={styles["icon-items"]}>
                <Link
                  href="https://github.com/shinya-koala/portfolio23"
                  target="_blank"
                  className={styles["icon-img"]}
                  style={{ backgroundImage: `url("/top/github_icon.svg")` }}
                ></Link>
              </li>
            </ul>
          </nav>
        </Drawer>
        <div className={styles["inner"]}>
          <div className={styles["-flex"]}>
            <div className={styles["title"]}>
              <p>Shinya Mizutani</p>
            </div>
            <nav className={styles["nav"]}>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-items"]}>
                  <Scroll
                    href="#about"
                    className={styles["nav-text"]}
                    to="about"
                    smooth={true}
                    duration={600}
                  >
                    About
                  </Scroll>
                </li>
                <li className={styles["nav-items"]}>
                  <Scroll
                    href="#product"
                    className={styles["nav-text"]}
                    to="product"
                    smooth={true}
                    duration={600}
                  >
                    Product
                  </Scroll>
                </li>
                <li className={styles["nav-items"]}>
                  <Scroll
                    href="#skill"
                    className={styles["nav-text"]}
                    to="skill"
                    smooth={true}
                    duration={600}
                  >
                    Skill
                  </Scroll>
                </li>
                <li className={styles["nav-items"]}>
                  <Scroll
                    href="#interest"
                    className={styles["nav-text"]}
                    to="interest"
                    smooth={true}
                    duration={600}
                  >
                    Interest
                  </Scroll>
                </li>
              </ul>
              <ul className={styles["icon-list"]}>
                <li className={styles["icon-items"]}>
                  <Link
                    href="https://puddle-splash-c80.notion.site/portfolio-498e7a7d3b7d4b90a5aef056df5afdc3?pvs=4"
                    target="_blank"
                    className={styles["icon-img"]}
                  >
                    <Image
                      src="/top/notion_icon.svg"
                      alt="notion icon"
                      width={60}
                      height={60}
                    />
                  </Link>
                </li>
                <li className={styles["icon-items"]}>
                  <Link
                    href="https://github.com/shinya-koala/portfolio23"
                    target="_blank"
                    className={styles["icon-img"]}
                    style={{ backgroundImage: `url("/top/github_icon.svg")` }}
                  >
                    <Image
                      src="/top/github_icon.svg"
                      alt="github icon"
                      width={60}
                      height={60}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
            {/* ドロワーボタン */}
            <div className={styles["drewer-button"]} onClick={openDrawer}>
              <span className={styles["-topborder"]}></span>
              <span className={styles["-bottomborder"]}></span>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className={styles["about"]}>
        <div className={styles["inner"]}>
          <div className={styles["title"]}>
            <p>About</p>
          </div>
          <div className={styles["text-image-container"]}>
            <div className={styles["text-content"]}>
              <div className={styles["text-name"]}>
                <p className={styles["name"]}>水谷 真也</p>
              </div>
              <div className={styles["style-text"]}>
                <p>
                  最近筋トレを始めました。隣の画像は筋トレを初めて2カ月後の筋肉です。デスクワークなのでエンジニアでも健康でいたい系の健康オタクです。好物は青汁入りプロテインです。インストラクター付きのジム通いなので結構ガチガチの筋トレです。
                </p>
              </div>
            </div>
            <div className={styles["image-content"]}>
              <Image
                src="/top/about_img01.jpg"
                alt="My arm image"
                width={360}
                height={360}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="product" className={styles["product"]}>
        <div className={styles["inner"]}>
          <div className={styles["title"]}>
            <p>Product</p>
          </div>
          <div className={styles["container"]}>
            <ul className={styles["list"]}>
              <li className={styles["items"]}>
                <Link
                  href="./emotion-sync/login"
                  target="_blank"
                  className={styles["link"]}
                >
                  <div className={styles["product-text"]}>
                    <p>EmotionSync</p>
                  </div>
                  <div className={styles["product-image"]}>
                    <Image
                      src="/top/product_img01.jpg"
                      alt="product image"
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <div className={styles["button-area"]}>
                    <button className={styles["link-button"]}>
                      サイトを見る
                    </button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skill" className={styles["skill"]}>
        <div className={styles["title"]}>
          <div className={styles["title-img"]}>
            <Image
              src="/top/skill_header.jpg"
              alt="skill image"
              width={1920}
              height={384}
            />
          </div>
          <p className={styles["title-text"]}>Skill</p>
        </div>
        <div className={`${styles["inner"]} ${styles["full-inner"]}`}>
          <ul className={styles["list"]}>
            <li className={styles["items"]}>
              <div className={styles["top-text"]}>
                <p className={styles["text"]}>
                  Web開発学科の専門学校に4年
                  通っていました。そこれは基本的にWeb周りのことを学んでいました。
                  若干バックエンド側の方もPHPで処理をしたりしていました。なので
                  データベース周りを少しだけ理解しています。
                </p>
              </div>
              <div className={styles["bottom-text"]}>
                <p className={styles["skill-name"]}>Program</p>
                <p className={styles["years"]}>2年</p>
              </div>
            </li>
            <li className={styles["items"]}>
              <div className={styles["top-text"]}>
                <p className={styles["text"]}>
                  専門学生時代に独学でWEBのレイアウトや色使いなのでのデザインを勉強し、グループ作業なので重宝されていました。学生後半になるとグループで大きなプロジェクトを立ち上げて作品をつくるのですが、時間の関係上デザインしか触らせてもらえなかったです。
                </p>
              </div>
              <div className={styles["bottom-text"]}>
                <p className={styles["skill-name"]}>Design</p>
                <p className={styles["years"]}>2年</p>
              </div>
            </li>
            <li className={styles["items"]}>
              <div className={styles["top-text"]}>
                <p className={styles["text"]}>
                  前世はゲーマーだったのかというレベルで幼いころからゲームが大好きで得意でした。私の家に遊びに来た友達によくゲームプレイを見せていたのですが、若干引かれたあの時の友達の目は忘れられないです。
                </p>
              </div>
              <div className={styles["bottom-text"]}>
                <p className={styles["skill-name"]}>Game</p>
                <p className={styles["years"]}>&infin;年</p>
              </div>
            </li>
            <li className={styles["items"]}>
              <div className={styles["top-text"]}>
                <p className={styles["text"]}>
                  中学生の時から歌が得意と自覚をし、高校生ぐらいから独学を始めました。最近本格的に勉強しようと、ボイトレに通い始めました。先生から結構褒められることが多くて現在、自己肯定感が高いです。
                </p>
              </div>
              <div className={styles["bottom-text"]}>
                <p className={styles["skill-name"]}>Music</p>
                <p className={styles["years"]}>12年</p>
              </div>
            </li>
            <li className={styles["items"]}>
              <div className={styles["top-text"]}>
                <p className={styles["text"]}>
                  今まで最低体重が52kg,
                  最高体重が98kgとスレンダーとファットマンを経験したので、次はスーパーマンになろうかと筋トレを始めました。ごめんなさい嘘です、健康になりたいと思ったから始めました。
                </p>
              </div>
              <div className={styles["bottom-text"]}>
                <p className={styles["skill-name"]}>Muscle Taining</p>
                <p className={styles["years"]}>3カ月</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="interest" className={styles["interest"]}>
        <div className={styles["inner"]}>
          <div className={styles["title"]}>
            <p>Interest</p>
          </div>
          <div className={styles["container"]}>
            <ul className={styles["list"]}>
              <li className={styles["items"]}>
                <p className={styles["interest-name"]}>Program</p>
                <p className={styles["interest-text"]}>
                  プログラムをちゃんと理解する
                  エンジニアになるべく、上京したら勉強会や仲間内でのプ
                  ロジェクトに積極的に参加したいです。予定はあります。
                </p>
              </li>
              <li className={styles["items"]}>
                <p className={styles["interest-name"]}>Music</p>
                <p className={styles["interest-text"]}>
                  どこかで歌活動をはじめようかと思います。最近、作詞・
                  作曲も手を出し始めたので近々オリジナル曲を作りたいです。
                </p>
              </li>
              <li className={styles["items"]}>
                <p className={styles["interest-name"]}>Muscle Taining</p>
                <p className={styles["interest-text"]}>
                  体格良い人をめざしています。自分の中でのイメージ
                  は逆三角体系で腹筋ありのちょっと脂肪もあるような
                  マッチョです。ついでに健康も維持できるので一石二鳥
                  だと思っています。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles["footer"]}>
        <div className={styles["inner"]}>
          <nav className={styles["nav"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-items"]}>
                <Scroll
                  className={styles["nav-text"]}
                  to="about"
                  smooth={true}
                  duration={600}
                >
                  About
                </Scroll>
              </li>
              <li className={styles["nav-items"]}>
                <Scroll
                  className={styles["nav-text"]}
                  to="product"
                  smooth={true}
                  duration={600}
                >
                  Product
                </Scroll>
              </li>
              <li className={styles["nav-items"]}>
                <Scroll
                  className={styles["nav-text"]}
                  to="skill"
                  smooth={true}
                  duration={600}
                  offset={-130}
                >
                  Skill
                </Scroll>
              </li>
              <li className={styles["nav-items"]}>
                <Scroll
                  className={styles["nav-text"]}
                  to="interest"
                  smooth={true}
                  duration={600}
                >
                  Interest
                </Scroll>
              </li>
            </ul>
            <ul className={styles["icon-list"]}>
              <li className={styles["icon-items"]}>
                <a
                  href="https://puddle-splash-c80.notion.site/portfolio-498e7a7d3b7d4b90a5aef056df5afdc3?pvs=4"
                  target="_blank"
                  className={styles["icon-img"]}
                >
                  <Image
                    src="/top/notion_icon.svg"
                    alt="notion icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li className={styles["icon-items"]}>
                <a
                  href="https://github.com/shinya-koala/portfolio23"
                  target="_blank"
                  className={styles["icon-img"]}
                >
                  <Image
                    src="/top/github_icon.svg"
                    alt="github icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles["copyright"]}>
            <p>&copy; 2023 Mizutani-Shinya. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
