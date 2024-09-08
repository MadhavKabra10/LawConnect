import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProf from './mycomponent/login&logout/login';
import ProfRegister from './mycomponent/register/ProfRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from './mycomponent/register/UserRegister';
import ChatPage from './mycomponent/chat/chatpage';
import Law from './mycomponent/InfoBot/InfoBot'
import About from './pages/about/about';
import Network from './pages/profile/network';
import Logout from './mycomponent/login&logout/logout';
import NewsPage from './pages/news/newsPage';
import Home from './pages/home/home';
import Index from './mycomponent/payment/payIndex';
import Error from './mycomponent/payment/payError';
import PaymentSuccess from './mycomponent/payment/paySuccess';
import PaymentCancelled from './mycomponent/payment/paymentcancel';

function App() {
    return ( 
        <>
        <BrowserRouter >
            <Routes >
                <Route exact path="/" element={<Home/>} ></Route>
                <Route exact path="/login" element={< LoginProf />} ></Route>
                <Route exact path='/logout' element={<Logout/>}></Route>  
                <Route exact path='/profregister'  element={< ProfRegister />} > </Route>  
                <Route exact path='/userregister' element={< UserRegister />} > </Route>  
                <Route exact path='/about' element={<About/>}> </Route>
                <Route exact path='/news' element={<NewsPage/>}> </Route>
                <Route exact path='/law' element={<Network/>}></Route>
                <Route exact path='/chat' element={<ChatPage/>}> </Route>
                <Route exact path='/info' element={<Law/>}></Route>
                <Route exact path='/payindex' element={<Index actionUrl="http://localhost:8080/payment/create"/>}></Route>
                <Route exact path='/paycancel' element={<PaymentCancelled homeUrl="http://localhost:3000"/>}></Route>
                <Route exact path='/paysuccess' element={<PaymentSuccess homeUrl="http://localhost:3000"/>}></Route>
                <Route exact path='/payerror' element={<Error homeUrl="http://localhost:3000"/>}></Route>
        </Routes >  
       </BrowserRouter>  
       </>
    );
}

export default App;