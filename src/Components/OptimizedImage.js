import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import blurHashes from "../posterHashes.json";

function OptimizedImage({ hashKey, src, alt, className, ...props }) {
	const [isLoaded, setLoaded] = useState(false);
	const [isLoadStarted, setLoadStarted] = useState(false);

	const handleLoad = () => {
		setLoaded(true);
	};

	const handleLoadStarted = () => {
		setLoadStarted(true);
	};

	return (
		<div className={className}>
			<div className="relative">
				<LazyLoadImage key={src} src={src} onLoad={handleLoad} beforeLoad={handleLoadStarted} />
				{!isLoaded && isLoadStarted && (
					<BlurhashCanvas
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 20,
							width: "100%"
						}}
						hash={blurHashes[hashKey] || "UC3w{OpFMMWUr2gKYGg0n,k-c8brYscknAk-"}
						punch={1}
					/>
				)}
			</div>
		</div>
	);
}

export { OptimizedImage };
