from huggingface_hub import InferenceClient
import os

HF_API_TOKEN=os.environ.get("HF_API_TOKEN")

client = InferenceClient(
    provider="hf-inference",
    api_key=HF_API_TOKEN
)

result = client.text_generation(
    model="meta-llama/Llama-3.2-3B-Instruct",
    prompt="Can you please let us know more details about your "
)

print(result)
