import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { useRecoilValue } from "recoil";
import { Content, Footer, Header, Sidebar } from "./components";
import { isLoading, themesSetting } from "./recoil";

const App = () => {
  const theme = useRecoilValue(themesSetting);
  const loading = useRecoilValue(isLoading);
  return (
    <Suspense fallback={<Skeleton width={"100%"} height={1000} />}>
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
