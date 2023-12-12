import { About } from './pages/about';
import {Posts} from "./pages/posts";
import {PostPage} from "./pages/post";
import {Admin} from "./pages/admin";
import {Home} from "./pages/home";
import {ContactPage} from "./pages/contact";
import {Header} from "./components/hedaer";
import {Footer} from "./components/footer";

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Posts />
      <PostPage />
      <ContactPage />
      <Admin />
      <Footer />
    </div>
  )
}
