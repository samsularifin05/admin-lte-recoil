import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { Content, Footer, Header, Sidebar } from "./components";
import { isLoading, themesSetting } from "./recoil";

const App = () => {
  const theme = useRecoilValue(themesSetting);
  const loading = useRecoilValue(isLoading);
  return (
    <Suspense fallback={<>MASUK</>}>
      <div
        id="cover-spin"
        style={{ display: `${loading.content ? "block" : "none"} ` }}
      ></div>
      {theme.header && <Header />}
      {theme.sidebar && <Sidebar />}
      {theme.content && <Content />}
      {theme.footer && <Footer />}
    </Suspense>
  );
};

export default App;
