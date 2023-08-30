import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainLayout.module.scss";
import { Drawer, Menu, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "@/contexts/AuthContext";
import { url } from "@/util/config";

type Props = {
  children: ReactNode;
};

export function MainLayout(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedUsername, logout } = useAuth();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles["wrap"]}>
      <header className={styles["header"]}>
        {/* ドロワーメニュー */}
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          {/* メニューのコンテンツをここに配置 */}
          <div className={styles["drewer-menu"]}>
            <div
              className={styles["close-button"]}
              onClick={toggleDrawer(false)}
            >
              <CloseOutlinedIcon className={styles["close-icon"]} />
            </div>
            <div className={styles["inner"]}>
              <div className={styles["icon-wrap"]}>
                <div className={styles["icon-inner"]}>
                  <PersonOutlineOutlinedIcon className={styles["personicon"]} />
                </div>
                <p className={styles["nametext"]}>{loggedUsername}</p>
              </div>
              <ul className={styles["drewer-list"]}>
                <li className={styles["drewer-items"]}>
                  <Link
                    href="/emotion-sync/emotion"
                    className={styles["drewer-link"]}
                  >
                    <Image
                      src={url("/share/hearts.svg")}
                      alt="nav icon"
                      width={24}
                      height={20.04}
                      className={styles["iconimage"]}
                    />
                    Emotion
                  </Link>
                </li>
                <li className={styles["drewer-items"]}>
                  <Link
                    href="#"
                    className={`${styles["drewer-link"]} ${styles["disable"]}`}
                  >
                    <Image
                      src={url("/share/inventory.svg")}
                      alt="nav icon"
                      width={24}
                      height={20.04}
                      className={styles["iconimage"]}
                    />
                    Feeling
                  </Link>
                </li>
                <li className={styles["drewer-items"]}>
                  <Link
                    href="/emotion-sync/graph"
                    className={styles["drewer-link"]}
                  >
                    <Image
                      src={url("/share/bar_chart.svg")}
                      alt="nav icon"
                      width={24}
                      height={20.04}
                      className={styles["iconimage"]}
                    />
                    Graph
                  </Link>
                </li>
                <li className={styles["drewer-items"]}>
                  <Link
                    href="/emotion-sync/debug"
                    className={styles["drewer-link"]}
                  >
                    <SettingsIcon
                      className={styles["iconimage"]}
                    ></SettingsIcon>
                    Debug
                  </Link>
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </Drawer>

        {/* メニュー */}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <p onClick={logout} className={styles["other-menu-text"]}>
              {" "}
              ログアウト{" "}
            </p>
          </MenuItem>
        </Menu>

        <div className={styles["inner"]}>
          <div className={styles["drewer-buttom"]} onClick={toggleDrawer(true)}>
            <span className={styles["-topborder"]}></span>
            <span className={styles["-bottomborder"]}></span>
          </div>
          <div className={styles["logo"]}>
            <p className={styles["-titletext"]}>EmotionSync</p>
          </div>
          <div className={styles["menu-button"]} onClick={handleClick}>
            <span className={`${styles["rowdots"]} ${styles["pc-disp"]}`}>
              <MoreHorizOutlinedIcon />
            </span>
            <span className={`${styles["rowdots"]} ${styles["sp-disp"]}`}>
              <MoreVertOutlinedIcon />
            </span>
          </div>
        </div>
      </header>
      {props.children}
    </div>
  );
}
