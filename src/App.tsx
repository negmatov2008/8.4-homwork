import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [inp, setInp] = useState<string | undefined>();
  const [value, setValue] = useState<string | undefined>();
  const [Api, setApi] = useState();

  const getApi = async () => {
    const res = await fetch(
      `https://api.github.com/users/${inp ? inp : "Octocat"}`
    );
    const data = await res.json();
    setApi(data);
  };
  useEffect(() => {
    getApi();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Api);
    setValue("");
    getApi();
  };

  return (
    <>
      <div className="max-w-[321px] mx-auto md:max-w-[573px] lg:max-w-[730px] ">
        <Header />

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="relative max-w-full mb-[16px] md:mb-[24px]"
        >
          <img
            className="absolute top-[20px] left-[16px] md:top-[23px] md:left-[32px]  w-[20px] md:w-[24px]"
            src="search-icon.svg"
            alt=""
          />
          <input
            value={value}
            onChange={(e) => setInp(e.target.value)}
            type="text"
            className="w-full py-[17px] pl-[45px] pr-[98px] md:py-[22px] md:pl-[80px] md:pr-[239px] lg:pr-[396px] placeholder:text-[#4B6A9B] placeholder:text-[13px] md:placeholder:text-[18px] dark:placeholder:text-[#fff] rounded-[15px] text-[13px] md:text-[18px] shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)] dark:shadow-none bg-[#FEFEFE] dark:bg-[#1E2A47]"
            placeholder="Search GitHub username…"
          />
          <button className=" absolute top-[6.5px] right-[7px] rounded-[10px] py-[12.5px] pl-[18px] pr-[14px] bg-[#0079FF]  dark:bg-[#0079FF] text-[#fff] text-[14px] font-bold md:py-[12.9px] md:pl-[24px] md:pr-[23px] md:top-[9.5px] md:right-[10px] md:text-[16px] hover:bg-[#60ABFF] ">
            Search
          </button>
        </form>

        <div className="max-w-full rounded-[15px] bg-[#FEFEFE] dark:bg-[#1E2A47] shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)] dark:shadow-none pt-[32px] px-[24px] pb-[49px] md:top-[40px] md:px-[40px] md:pb-[40px] lg:pt-[48px] lg:px-[48px] lg:pb-[48px] ">
          <div className="lg:flex lg:gap-[37px]">
            <img
              className="hidden lg:block rounded-[999px] w-[117px] h-[117px]"
              src="https://avatars.githubusercontent.com/u/147815343?v=4"
              alt=""
            />
            <div>
              <div className="mb-[34px] md:mb-[24px] flex gap-[19px] items-center">
                <img
                  className="w-[70px] rounded-[999px] md:w-[117px] lg:hidden"
                  src="https://avatars.githubusercontent.com/u/147815343?v=4"
                  alt=""
                />
                <div className="flex flex-col gap-[6px] lg:max-w-[480px] lg:flex-row lg:gap-[127px] ">
                  <div>
                    <h1 className="font-bold md:text-[26px]">The Octocat</h1>
                    <span>
                      <a
                        className="text-[#0079FF] text-[13px] md:text-[16px] "
                        href="https://github.com/negmatov2008"
                      >
                        @octocat
                      </a>
                    </span>
                  </div>
                  <span className="text-[#697C9A] text-[13px] md:text-[16px]">
                    Joined 25 Jan 2011
                  </span>
                </div>
              </div>
              <p className="text-[13px] md:text-[15px] leading-[25px] text-[#4B6A9B] dark:text-[#fff] mb-[23px] md:mb-[32px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </p>
              <div className="flex max-w-full bg-[#F6F8FF] rounded-[10px] dark:bg-[#141D2F] justify-between  pt-[18px] pl-[15px] md:pt-[15px] md:pl-[32px] pb-[19px] md:pb-[17px] pr-[14px] md:pr-[96px] lg:pr-[83px] mb-[24px] md:mb-[32px] lg:mb-[39px]">
                <div className="flex flex-col items-center md:items-start gap-[8px] md:gap-0">
                  <span className="text-[#4B6A9B] text-[11px] dark:text-[#fff] md:text-[13px]">
                    Repos
                  </span>
                  <span className=" text-[16px] font-bold md:text-[22px] text-center md:text-start w-[65px] md:max-w-[65px]">
                    8
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-[8px] md:gap-0">
                  <span className="text-[#4B6A9B] text-[11px] dark:text-[#fff] md:text-[13px]">
                    Followers
                  </span>
                  <span className=" text-[16px] font-bold md:text-[22px] text-center md:text-start w-[65px] md:max-w-[65px]">
                    3938
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-[8px] md:gap-0">
                  <span className="text-[#4B6A9B] text-[11px] dark:text-[#fff] md:text-[13px]">
                    Following
                  </span>
                  <span className=" text-[16px] font-bold md:text-[22px] text-center md:text-start w-[65px] md:max-w-[65px]">
                    9
                  </span>
                </div>
              </div>
              <footer className="flex flex-col md:flex-row gap-[17px] max-w-full md:gap-[65px] lg:gap-[62px]">
                <div className="flex flex-col gap-[17px]">
                  <div className="flex gap-[19.25px] items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.03013 0.00158203C9.42758 0.0504882 11.5835 1.33021 12.7973 3.4249C14.038 5.56599 14.072 8.13786 12.8882 10.3047L7.92872 19.3823L7.92196 19.3943C7.7038 19.7736 7.3129 20 6.87634 20C6.43974 20 6.04884 19.7736 5.83064 19.3943L5.82388 19.3823L0.86439 10.3047C-0.319437 8.13786 -0.285492 5.56599 0.95521 3.4249C2.16904 1.33021 4.32497 0.0504882 6.72239 0.00158203C6.82477 -0.000527343 6.92778 -0.000527343 7.03013 0.00158203ZM4.06376 6.25001C4.06376 7.80083 5.32544 9.06251 6.87626 9.06251C8.42712 9.06251 9.68876 7.80083 9.68876 6.25001C9.68876 4.69919 8.42708 3.43752 6.87626 3.43752C5.32544 3.43752 4.06376 4.69919 4.06376 6.25001Z"
                        fill="#4B6A9B"
                      />
                    </svg>
                    <span className="text-[#4B6A9B] text-[13px] dark:text-[#fff] md:text-[15px]">
                      San Francisco
                    </span>
                  </div>
                  <div className="flex gap-[13.25px] items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.40404 5.01207C5.0485 7.44921 5.56252 11.4937 8.26076 13.2854C8.34967 13.3445 8.46795 13.3328 8.54431 13.2582C9.11236 12.7031 9.59291 12.1655 10.0137 11.4817C10.0781 11.3771 10.038 11.2414 9.93002 11.1829C9.51845 10.9599 9.10892 10.5418 8.87838 10.1002L8.8781 10.1003C8.60193 9.55042 8.50791 8.93398 8.65412 8.29734C8.65428 8.29738 8.65443 8.29742 8.65459 8.29742C8.82283 7.48234 9.69787 6.72414 10.3662 6.02293C10.3648 6.02246 10.3634 6.02195 10.362 6.02148L12.866 3.46578C13.8639 2.44731 15.5053 2.43891 16.5136 3.44715C17.532 4.445 17.5488 6.09468 16.551 7.11312L15.0343 8.67281C14.9641 8.74499 14.9413 8.85031 14.9742 8.9455C15.3234 9.9582 15.4093 11.3861 15.1752 12.465C15.1687 12.4951 15.2059 12.5149 15.2276 12.4928L18.4556 9.19816C20.5177 7.09347 20.5002 3.66676 18.4167 1.58324C16.2904 -0.543044 12.8289 -0.525348 10.7245 1.6225L7.41697 4.99824C7.4126 5.00285 7.40846 5.00754 7.40404 5.01207Z"
                        fill="#4B6A9B"
                      />
                      <path
                        d="M13.439 13.7496C13.4389 13.7497 13.4388 13.7499 13.4388 13.75C13.4409 13.7491 13.4428 13.7483 13.4449 13.7474C14.1036 12.5428 14.2333 11.1612 13.9246 9.81432L13.9232 9.81576L13.9217 9.8151C13.6285 8.61553 12.8241 7.42436 11.7316 6.69096C11.6376 6.62787 11.4875 6.63518 11.3995 6.70635C10.8461 7.15381 10.3044 7.7276 9.94697 8.45983C9.89083 8.57479 9.93287 8.71287 10.0435 8.77709C10.4583 9.01791 10.8329 9.37049 11.0837 9.83857L11.0841 9.8383C11.2796 10.169 11.4722 10.7964 11.3474 11.4705C11.3474 11.4705 11.3472 11.4705 11.3472 11.4705C11.2308 12.3643 10.3282 13.1842 9.61068 13.9229L9.61103 13.9233C9.06486 14.4818 7.67646 15.8972 7.12052 16.4651C6.12267 17.4836 4.47299 17.5004 3.45455 16.5026C2.43612 15.5047 2.41928 13.855 3.41713 12.8366L4.93834 11.2722C5.00728 11.2013 5.03072 11.0983 5.00006 11.0042C4.66228 9.96787 4.56975 8.57213 4.78295 7.49451C4.78889 7.46447 4.75193 7.44529 4.73049 7.46717L1.551 10.7123C-0.53228 12.8386 -0.514624 16.3004 1.5903 18.4053C3.71647 20.4885 7.16049 20.4533 9.24369 18.3272C9.9674 17.5176 13.0654 14.6493 13.439 13.7496Z"
                        fill="#4B6A9B"
                      />
                    </svg>
                    <span className="text-[#4B6A9B] text-[13px] dark:text-[#fff] md:text-[15px]">
                      <a target="_blank" href="https://github.blog">
                        https://github.blog
                      </a>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px]">
                  <div className="flex gap-[13px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M20 2.79875C19.2562 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1362 2.14125 19.4412 1.18C18.6487 1.6525 17.7737 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5762 0.875 9.74874 2.7175 9.74874 4.97625C9.74874 5.30125 9.77624 5.61375 9.84374 5.91124C6.43499 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.831249 2.93875 0.831249 3.695C0.831249 5.115 1.5625 6.37374 2.6525 7.10249C1.99375 7.08999 1.3475 6.89874 0.799999 6.59749C0.799999 6.60999 0.799999 6.62624 0.799999 6.64249C0.799999 8.63499 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7912 2.23375 10.7362C2.765 12.36 4.2725 13.5537 6.06499 13.5925C4.67 14.6837 2.89875 15.3412 0.981249 15.3412C0.644999 15.3412 0.3225 15.3262 0 15.285C1.81625 16.4562 3.96875 17.125 6.28999 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9537 5.10125 17.945 4.9275C18.7587 4.35 19.4425 3.62875 20 2.79875Z"
                        fill="#4B6A9B"
                      />
                    </svg>
                    <span className="text-[#4B6A9B] text-[13px] dark:text-[#fff] md:text-[15px]">
                      Not Available
                    </span>
                  </div>
                  <div className="flex gap-[13.25px] items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8583 1.55844L1.7 0.166772C1.275 0.100106 0.841666 0.216772 0.516666 0.491772C0.191666 0.775105 0 1.18344 0 1.60844V19.1668C0 19.6251 0.375 20.0001 0.833333 20.0001H3.54166V15.6251C3.54166 14.8168 4.19166 14.1668 5 14.1668H7.08333C7.89166 14.1668 8.54166 14.8168 8.54166 15.6251V20.0001H12.0833V3.0001C12.0833 2.28344 11.5667 1.6751 10.8583 1.55844ZM4.58333 12.2918H3.33333C2.98833 12.2918 2.70833 12.0118 2.70833 11.6668C2.70833 11.3218 2.98833 11.0418 3.33333 11.0418H4.58333C4.92833 11.0418 5.20833 11.3218 5.20833 11.6668C5.20833 12.0118 4.92833 12.2918 4.58333 12.2918ZM3.33333 9.79176H4.58333C4.92833 9.79176 5.20833 9.51176 5.20833 9.16676C5.20833 8.82176 4.92833 8.54176 4.58333 8.54176H3.33333C2.98833 8.54176 2.70833 8.82176 2.70833 9.16676C2.70833 9.51176 2.98833 9.79176 3.33333 9.79176ZM4.58333 7.29177H3.33333C2.98833 7.29177 2.70833 7.01177 2.70833 6.66677C2.70833 6.32177 2.98833 6.04177 3.33333 6.04177H4.58333C4.92833 6.04177 5.20833 6.32177 5.20833 6.66677C5.20833 7.01177 4.92833 7.29177 4.58333 7.29177ZM3.33333 4.79177H4.58333C4.92833 4.79177 5.20833 4.51177 5.20833 4.16677C5.20833 3.82177 4.92833 3.54177 4.58333 3.54177H3.33333C2.98833 3.54177 2.70833 3.82177 2.70833 4.16677C2.70833 4.51177 2.98833 4.79177 3.33333 4.79177ZM8.74999 12.2918H7.49999C7.15499 12.2918 6.87499 12.0118 6.87499 11.6668C6.87499 11.3218 7.15499 11.0418 7.49999 11.0418H8.74999C9.09499 11.0418 9.37499 11.3218 9.37499 11.6668C9.37499 12.0118 9.09499 12.2918 8.74999 12.2918ZM7.49999 9.79176H8.74999C9.09499 9.79176 9.37499 9.51176 9.37499 9.16676C9.37499 8.82176 9.09499 8.54176 8.74999 8.54176H7.49999C7.15499 8.54176 6.87499 8.82176 6.87499 9.16676C6.87499 9.51176 7.15499 9.79176 7.49999 9.79176ZM8.74999 7.29177H7.49999C7.15499 7.29177 6.87499 7.01177 6.87499 6.66677C6.87499 6.32177 7.15499 6.04177 7.49999 6.04177H8.74999C9.09499 6.04177 9.37499 6.32177 9.37499 6.66677C9.37499 7.01177 9.09499 7.29177 8.74999 7.29177ZM7.49999 4.79177H8.74999C9.09499 4.79177 9.37499 4.51177 9.37499 4.16677C9.37499 3.82177 9.09499 3.54177 8.74999 3.54177H7.49999C7.15499 3.54177 6.87499 3.82177 6.87499 4.16677C6.87499 4.51177 7.15499 4.79177 7.49999 4.79177Z"
                        fill="#4B6A9B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9167 7.79248L18.8501 9.03498C19.5309 9.18581 20.0001 9.77165 20.0001 10.46V18.5416C20.0001 19.3458 19.3459 20 18.5417 20H12.9167V7.79248ZM15.6251 17.5H16.8751C17.2201 17.5 17.5001 17.22 17.5001 16.875C17.5001 16.53 17.2201 16.25 16.8751 16.25H15.6251C15.2801 16.25 15.0001 16.53 15.0001 16.875C15.0001 17.22 15.2801 17.5 15.6251 17.5ZM16.8751 15H15.6251C15.2801 15 15.0001 14.72 15.0001 14.375C15.0001 14.03 15.2801 13.75 15.6251 13.75H16.8751C17.2201 13.75 17.5001 14.03 17.5001 14.375C17.5001 14.72 17.2201 15 16.8751 15ZM15.6251 12.5H16.8751C17.2201 12.5 17.5001 12.22 17.5001 11.875C17.5001 11.53 17.2201 11.25 16.8751 11.25H15.6251C15.2801 11.25 15.0001 11.53 15.0001 11.875C15.0001 12.22 15.2801 12.5 15.6251 12.5Z"
                        fill="#4B6A9B"
                      />
                    </svg>
                    <span className="text-[#4B6A9B] text-[13px] dark:text-[#fff] md:text-[15px]">
                      <a target="_blank" href="@github">
                        @github
                      </a>
                    </span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className="pt-[79px] md:pt-[236px] lg:pt-[145px]"></div>
      </div>
    </>
  );
}

export default App;
