import { Film } from 'lucide-react';

/**
 * A media slot for the experience section that supports BOTH video and images.
 *
 * - When `videoSrc` is provided it renders a `<video>` element (controls, loop,
 *   muted, inline) so a video can play in place.
 * - Otherwise, when `imageSrc` is provided it renders an `<img>` (preserving
 *   existing photo support).
 * - With neither, it shows a labelled placeholder inviting a video.
 *
 * The visual editor's built-in media picker only handles `<img>` elements, so a
 * `<video>` source is set by providing a video URL (e.g. through an edit
 * instruction) rather than via the image upload button. This keeps the video
 * pathway available without fabricating or forcing a video.
 */
export function MediaPlaceholder({
	label,
	videoSrc = '',
	imageSrc = '',
	className = '',
}: {
	label: string;
	videoSrc?: string;
	imageSrc?: string;
	className?: string;
}) {
	const hasVideo = Boolean(videoSrc);
	const hasImage = Boolean(imageSrc);
	return (
		<div
			className={`photo-placeholder media-placeholder ${className}`}
			role="img"
			aria-label={hasVideo || hasImage ? label : `Video space: ${label}`}
		>
			{hasVideo ? (
				<video
					src={videoSrc}
					poster={hasImage ? imageSrc : undefined}
					controls
					loop
					muted
					playsInline
					preload="metadata"
				/>
			) : hasImage ? (
				<img src={imageSrc} alt={label} loading="lazy" />
			) : (
				<>
					<div className="photo-mark">V<span>R</span></div>
					<div className="photo-label">
						<Film size={16} />
						<span>{label}</span>
						<small>YOUR VIDEO OR PHOTO HERE</small>
					</div>
				</>
			)}
		</div>
	);
}
