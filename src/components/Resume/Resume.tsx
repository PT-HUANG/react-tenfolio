import { Link } from "react-router-dom";
import resume_1 from "@/assets/resume_1.jpg";
import resume_2 from "@/assets/resume_2.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Resume() {
  return (
    <>
      <div id="resume" className="h-[40vh] lg:h-[80vh] bg-[#000e24]">
        <div className="w-[80%] max-w-[1000px] h-[90%] mx-auto flex flex-col align-center justify-center">
          <div className="text-white text-center text-xl font-bold ml-2 mb-4 pt-6 md:text-3xl md:mx-6">
            Resume
          </div>
          <div className="flex gap-4 justify-center">
            <Dialog>
              <DialogTrigger className="cursor-pointer px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-500 transition-colors duration-300 md:px-8 md:text-base md:mt-4">
                Preview
              </DialogTrigger>
              <DialogContent className="sm:w-[80%] sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle className="ml-4">Resume</DialogTitle>
                  <DialogDescription className="overflow-y-scroll max-h-[65vh]">
                    <img src={resume_1} alt="part1" />
                    <img src={resume_2} alt="part2" />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded-md hover:bg-yellow-300 transition-colors duration-300 md:px-8 md:py-6 md:text-base md:mt-4">
                Download
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
