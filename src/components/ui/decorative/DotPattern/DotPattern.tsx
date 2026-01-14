import React from 'react';
export type DotPatternVariant =
    | 'staircase'
    | 'dots'
    | 'grid'
    | 'diagonal'
    | 'border';

export interface DotPatternProps {
    variant?: DotPatternVariant;
    color?: string;
    opacity?: string;
    dotSize?: string;
    gap?: string;
    lineSpacing?: string;
    lines?: number;
    columns?: number;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
    offset?: number;
    className?: string;
}

const DotPattern: React.FC<DotPatternProps> = ({
    variant = 'staircase',
    color = 'bg-about-title',
    opacity = 'opacity-5',
    dotSize = 'w-1.5 h-1.5',
    gap = 'gap-0.5',
    lineSpacing = 'mb-0.5',
    lines = 15,
    columns = 10,
    vertical = 'bottom',
    horizontal = 'left',
    offset = 4,
    className = '',
    ...props
}) => {
    // Generate position classes safely
    const getPositionClasses = () => {
        const verticalClass = vertical === 'top' ? '-top' : '-bottom';
        const horizontalClass = horizontal === 'left' ? '-left' : '-right';

        return `absolute ${verticalClass}-${offset} ${horizontalClass}-${offset}`;
    };

    // 1. Staircase Pattern
    const renderStaircasePattern = () => (
        <>
            {Array.from({ length: lines }).map((_, lineIndex) => {
                const dotsCount = lineIndex + 1;
                return (
                    <div key={`line-${lineIndex}`} className={`flex ${gap} ${lineSpacing}`}>
                        {Array.from({ length: dotsCount }).map((_, dotIndex) => (
                            <div
                                key={`dot-${lineIndex}-${dotIndex}`}
                                className={`${dotSize} rounded-full ${color}`}
                            />
                        ))}
                    </div>
                );
            })}
        </>
    );

    // 2. Dots Pattern
    const renderDotsPattern = () => (
        <div className={`flex flex-wrap ${gap}`}>
            {Array.from({ length: lines * 3 }).map((_, index) => (
                <div
                    key={`dot-${index}`}
                    className={`${dotSize} rounded-full ${color} ${lineSpacing}`}
                />
            ))}
        </div>
    );

    // 3. Grid Pattern
    const renderGridPattern = () => (
        <>
            {Array.from({ length: lines }).map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className={`flex ${gap} ${lineSpacing}`}>
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <div
                            key={`cell-${rowIndex}-${colIndex}`}
                            className={`${dotSize} rounded-full ${color}`}
                        />
                    ))}
                </div>
            ))}
        </>
    );

    // 4. Diagonal Pattern
    const renderDiagonalPattern = () => (
        <>
            {Array.from({ length: lines }).map((_, lineIndex) => (
                <div key={`diag-line-${lineIndex}`} className={`flex ${gap} ${lineSpacing}`}>
                    {Array.from({ length: lines }).map((_, dotIndex) => (
                        <div
                            key={`diag-dot-${lineIndex}-${dotIndex}`}
                            className={`${dotSize} rounded-full ${dotIndex === lineIndex ? color : 'opacity-20'
                                }`}
                        />
                    ))}
                </div>
            ))}
        </>
    );

    // 5. Border Pattern
    const renderBorderPattern = () => (
        <div className="relative w-full h-full">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`top-${i}`} className={`${dotSize} rounded-full ${color}`} />
                ))}
            </div>
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`bottom-${i}`} className={`${dotSize} rounded-full ${color}`} />
                ))}
            </div>
        </div>
    );

    // Select which pattern to render
    const renderPattern = () => {
        switch (variant) {
            case 'dots':
                return renderDotsPattern();
            case 'grid':
                return renderGridPattern();
            case 'diagonal':
                return renderDiagonalPattern();
            case 'border':
                return renderBorderPattern();
            case 'staircase':
            default:
                return renderStaircasePattern();
        }
    };

    return (
        <div
            className={`${getPositionClasses()} ${opacity} ${className}`}
            {...props}
        >
            {renderPattern()}
        </div>
    );
};

export default DotPattern;
