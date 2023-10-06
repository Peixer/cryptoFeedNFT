import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export function useReplicate(
    media_url: string,
    onSuccess?: (output: string) => unknown
) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const generateAIImage = useCallback(async (selected) => {
        if (!media_url) return;
        try {
            setError(false);
            setIsLoading(true);
            const response = await axios.post("/api", {
                media_url,
                model : selected
            });
            const output = response.data.output;

            if (output) {
                setData(output);
                onSuccess(output);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { data, generateAIImage, isLoading, error };
}
