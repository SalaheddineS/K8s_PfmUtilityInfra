import { useState } from 'react';
import { TextInput, createStyles, rem, ActionIcon } from '@mantine/core';
import {  IconCopy } from '@tabler/icons-react';
const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({


    label: {
        position: 'absolute',
        zIndex: 2,
        top: rem(7),
        left: theme.spacing.sm,
        pointerEvents: 'none',
        color: floating
            ? theme.colorScheme === 'dark'
                ? theme.white
                : theme.black
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
        transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
        transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-28)})` : 'none',
        fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
        fontWeight: floating ? 500 : 400,
    },

    required: {
        transition: 'opacity 150ms ease',
        opacity: floating ? 1 : 0,
    },

    input: {
        '&::placeholder': {
            transition: 'color 150ms ease',
            color: !floating ? 'transparent' : undefined,
        },
    },
}));

interface FloatingLabelInputInterface{
    shortenedUrl:string
}
export default function FloatingLabelInput(props:FloatingLabelInputInterface) {
    const [focused, setFocused] = useState(false);

    const { classes } = useStyles({ floating: props.shortenedUrl.trim().length !== 0 || focused });

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(props.shortenedUrl).then(() => {
            // Value successfully copied to clipboard
        }).catch((error) => {
            console.error('Failed to copy text: ', error);
        });
    };

    return (
        <div >
            <TextInput
                size='xl'
                required
                classNames={classes}
                value={props.shortenedUrl}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt="lg"
                autoComplete="nope"
                readOnly // Prevent text input
                rightSection={
                    <ActionIcon size={32} radius="xl" variant="filled">
                      
                        <IconCopy size="1.1rem" stroke={1.5} onClick={handleCopyToClipboard}/>
                      
                    </ActionIcon>
                  }
                

            />

        </div>

    );
}
