import { useState } from "react";
import { CiBellOn, CiUser, CiShoppingCart } from "react-icons/ci";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigator = useNavigate();
  return (
    <header className="text-white w-full m-auto absolute ">
      <nav className="flex text-xl p-10 m-auto  justify-evenly w-11/12">
        <div className="w-2/12 font-bold p-4">
          <span>MEGA COFFEE</span>
        </div>
        <div
          onMouseEnter={() => setShowMenu(!showMenu)}
          className="flex flex-col  font-bold w-8/12"
        >
          <div className="flex w-full justify-center">
            <span className="w-52 p-4 ">메가 스토리</span>
            <span className="w-52 p-4 ">메뉴소개</span>
            <span className="w-52 p-4 ">매장찾기</span>
            <span className="w-52 p-4 ">메가소식</span>
          </div>
          {showMenu && (
            <div className=" flex  h-48 justify-center bg-gradient-to-r from-white/0 via-white to-white/0 text-[#2daed9]	">
              <ul className="w-52">
                <li onClick={() => navigator("/about/brand")}>브랜드</li>
                <li onClick={() => navigator("/about/map")}>오시는길</li>
              </ul>
              <ul className="w-52">
                <li onClick={() => navigator("/menu/drink")}>음료</li>
                <li onClick={() => navigator("/menu/food")}>푸드</li>
                <li onClick={() => navigator("/menu/product")}>제품</li>
              </ul>
              <ul className="w-52">
                <li onClick={() => navigator("/store/find")}>매장 찾기</li>
              </ul>
              <ul className="w-52">
                <li onClick={() => navigator("/event")}>이벤트</li>
                <li onClick={() => navigator("/board")}>게시판</li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex text-3xl justify-evenly w-2/12">
          <ul className="p-4">
            <CiBellOn className="hover:scale-125" />
          </ul>
          <ul className="p-4">
            <CiUser className="hover:scale-125" />
          </ul>
          <ul className="p-4">
            <CiShoppingCart className="hover:scale-125" />
          </ul>
        </div>
      </nav>
      <Menu />
    </header>
  );
}
