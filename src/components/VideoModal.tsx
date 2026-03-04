import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

const isYouTube = (url: string) =>
  /youtube\.com\/embed\/|youtu\.be\//.test(url) || (url.includes("youtube.com") && url.includes("embed"));

const isFacebookVideo = (url: string) => url.includes("facebook.com/plugins/video");
const isFacebookPost = (url: string) => url.includes("facebook.com/plugins/post");

const VideoModal = ({ open, onClose, url, title = "Video" }: VideoModalProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {url ? (
            <>
              <div
                className={`w-full rounded-xl overflow-hidden bg-black ${
                  isFacebookVideo(url)
                    ? "aspect-[9/16] max-w-sm mx-auto"
                    : isFacebookPost(url)
                      ? "max-w-[500px] mx-auto w-full min-h-[400px] h-[min(703px,85vh)]"
                      : "aspect-video"
                }`}
              >
                {isYouTube(url) ? (
                  <iframe
                    src={url.startsWith("http") ? url : `https://www.youtube.com/embed/${url}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : isFacebookVideo(url) ? (
                  <iframe
                    src={url}
                    title={title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : isFacebookPost(url) ? (
                  <iframe
                    src={url}
                    title={title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <video src={url} controls autoPlay className="w-full h-full" title={title} />
                )}
              </div>
              {title && (
                <p className="mt-2 text-center text-white font-display font-semibold">{title}</p>
              )}
            </>
          ) : (
            <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center text-white/70 text-sm">
              Add your video URL (YouTube embed or /videos/teachers-day.mp4) in the component.
            </div>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default VideoModal;
