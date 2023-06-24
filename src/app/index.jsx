import * as Styled from "./styled";
import Button from "../components/button";
import ChromeIcon from "../svg/chrome-logo.svg";
import Profile from "../components/profile";
import { useTranslation } from "react-i18next";
import Editor from "../components/editor";
import Sidebar from "../components/sidebar";


function App() {
	const { t } = useTranslation();
    return (
		<Styled.Wrapper className="App">
			<Styled.Header>
				<Button variant="secondary" icon={ChromeIcon}>{t('header.chrome')}</Button>
				<Button variant="primary">{t('header.upgradeToPro')}</Button>
				<Profile />
			</Styled.Header>
			<Styled.Main>
				<Styled.SidebarWrapper>
					<Sidebar />
				</Styled.SidebarWrapper>
				<Styled.EditorWrapper>
					<Editor/>
				</Styled.EditorWrapper>
			</Styled.Main>
			<Styled.Footer></Styled.Footer>
		</Styled.Wrapper>
    );
}

export default App;
