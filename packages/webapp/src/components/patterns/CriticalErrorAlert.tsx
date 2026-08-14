import { CircleX } from 'lucide-react';
import { useMemo } from 'react';

import { Alert, AlertDescription } from '@nangohq/design-system';

import { StyledLink } from '../ui/StyledLink';

/**
 * For reuse on generic error scenarios.
 */
export const CriticalErrorAlert: React.FC<{ message: string }> = ({ message }) => {
    // Remove last `.` if present
    const finalMessage = useMemo(() => {
        return message.replace(/\.$/, '');
    }, [message]);

    return (
        <Alert variant="danger">
            <CircleX />
            <AlertDescription>
                {finalMessage}. Please{' '}
                <StyledLink to="https://nango.dev/slack" icon type="external" variant="error">
                    contact support
                </StyledLink>
                .
            </AlertDescription>
        </Alert>
    );
};
