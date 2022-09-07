export const Hidden = (): JSX.Element => {
    return (
        <>
            {/* Gradient to apply in svg */}
            <svg
                aria-hidden="true"
                style={{ width: 0, height: 0, position: "absolute" }}
                focusable="false"
            >
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2d1ed1" />
                    <stop offset="100%" stopColor="#9762b5" />
                </linearGradient>
            </svg>
        </>
    );
};
