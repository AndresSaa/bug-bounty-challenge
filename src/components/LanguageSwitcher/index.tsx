import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultTranslationModules } from "../../i18n/i18n";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          p: "4px 8px",
          borderRadius: 1,
          bgcolor: "#1c3330",
          "&:hover": { bgcolor: "#264540" },
          fontSize: "1rem"
        }}
      >
        🌐
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {defaultTranslationModules.map(({ locale, name }) => (
          <MenuItem
            key={locale}
            selected={i18n.language === locale}
            onClick={() => {
              i18n.changeLanguage(locale);
              setAnchorEl(null);
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
