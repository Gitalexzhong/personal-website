import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';

export default function Home() {
  return (
    <div
      className="box-border flex relative flex-col shrink-0 self-stretch px-6 py-5 h-screen bg-center bg-no-repeat bg-cover bg-neutral-800 min-h-[100px] max-md:h-auto max-md:grow-0 max-sm:w-screen max-sm:h-screen max-sm:ml-[calc(50%_-_50vw)]"
      // maxWidth={1200}
      // lazyLoad={false}
    >
      <section className="box-border flex relative flex-col grow shrink-0 self-stretch px-6 py-5 mx-auto w-full h-screen bg-center bg-no-repeat bg-cover bg-neutral-800 max-w-[1200px] min-h-[100px] max-md:h-auto max-md:grow-0 max-sm:w-screen max-sm:h-screen max-sm:ml-[calc(50%_-_50vw)]">
        <div className="box-border flex relative flex-col shrink-0 self-stretch my-auto w-full max-w-[1440px] max-md:grow max-md:mt-12 max-md:h-auto max-sm:m-auto">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-start items-start my-auto max-w-[750px] max-md:flex max-md:flex-row max-md:flex-wrap max-md:mb-12">
                <div className="flex flex-col justify-start items-start self-stretch max-w-full w-[666px]">
                  <div className="self-stretch max-w-full text-5xl font-bold tracking-tight text-left text-white leading-[57.6px] w-[666px] max-md:self-stretch max-md:w-auto max-md:text-5xl max-md:text-center max-sm:mb-11 max-sm:text-4xl">
                    Hai Im Alex Zhong&nbsp;
                  </div>
                  <div className="self-stretch mt-2 max-w-full text-2xl font-light tracking-normal text-left text-white w-[666px] max-md:text-center max-sm:text-base max-sm:tracking-wider">
                    <div>
                      I am a 4th year Computer Science student excited about the
                      opportunity to apply my skills and knowledge to real-world
                      software product design and development.
                    </div>
                  </div>
                </div>
                <div className="box-border flex relative flex-col shrink-0 self-stretch pb-8 mt-5 mb-0 w-auto h-auto max-sm:flex max-sm:flex-col max-sm:w-full max-sm:">
                  <button
                    className="box-border relative shrink-0 px-6 py-4 mt-5 mr-0 mb-8 text-center rounded border border-solid appearance-none cursor-pointer bg-black bg-opacity-0 text-[white] max-sm:self-stretch max-sm:w-auto"
                    // openLinkInNewTab={false}
                  >
                    Lets talk
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F13725b47a855414e93fd6631495f584e"
                className="box-border object-contain overflow-hidden shrink-0 w-full rounded-2xl aspect-[0.89] min-h-[20px] min-w-[20px]"
              />
            </div>
          </div>
        </div>
        <button
          className="box-border flex relative flex-col shrink-0 self-center p-3 mt-5 w-12 h-12 text-center bg-white bg-center bg-no-repeat bg-cover appearance-none cursor-pointer bg-[url(https://cdn.builder.io/api/v1/image/assets%2F481ecd094abe46c49a3ee5256ef72179%2F26a13528ea844d8dbd4ab0a237e7c0b9)] grow-0 rounded-[84px] text-[white]"
          // openLinkInNewTab={false}
        >
          {/* <div _text="" /> */}
        </button>
      </section>
    </div>
  );
}
