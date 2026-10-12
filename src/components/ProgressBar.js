import classNames from 'classnames';

const COLOR_CLASSES = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-400',
    indigo: 'bg-indigo-500',
    gray: 'bg-gray-400',
};

function ProgressBar({
    percent = 0,
    color = 'blue',
    striped,
    animated,
    indeterminate,
    showLabel,
    height = 20,
    ...rest
}) {
    const safePercent = Math.min(100, Math.max(0, percent));

    const barClasses = classNames('h-full rounded', COLOR_CLASSES[color], {
        'progress-striped': striped,
        'progress-striped-animated': striped && animated,
    });

    if (indeterminate) {
        return (
            <div
                {...rest}
                className="relative w-full overflow-hidden rounded bg-gray-200"
                style={{ height }} >
                <div className={classNames(barClasses, 'progress-indeterminate')} />
            </div>
        );
    }

    return (
        <div
            {...rest}
            className="w-full overflow-hidden rounded bg-gray-200"
            style={{ height }} >
            <div
                className={classNames(barClasses, 'transition-all duration-500')}
                style={{ width: `${safePercent}%` }} >
                {showLabel && (
                    <span className="flex h-full items-center justify-center text-xs font-bold text-white">
                        {safePercent}%
                    </span>
                )}
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    checkPercentValue: ({ percent }) => {
        if (percent < 0 || percent > 100) {
            return new Error('percent must be between 0 and 100');
        }
    },
};

export default ProgressBar;
