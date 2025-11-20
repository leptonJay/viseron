import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const Footer = styled("footer")(() => ({
  position: "relative",
  left: 0,
  bottom: 0,
  marginTop: "100px",
  paddingBottom: "35px",
}));

export default function AppFooter() {
  const theme = useTheme();
  const location = useLocation();
  const showFooter = !["/configuration", "/events", "/live"].includes(
    location.pathname,
  );

  return showFooter ? (
    <Footer>
      <Typography
        align="center"
        variant="subtitle2"
        color={theme.palette.text.secondary}
      >
        UPF Ayz 1.0.2
      </Typography>
    </Footer>
  ) : null;
}
