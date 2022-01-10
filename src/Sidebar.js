import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img
        className='sidebar_logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify'
      />
      <SidebarOption title='Home' SvgIcon={HomeOutlinedIcon} />
      <SidebarOption title='Search' SvgIcon={SearchSharpIcon} />
      <SidebarOption title='Your Library' SvgIcon={LibraryMusicOutlinedIcon} />

      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
